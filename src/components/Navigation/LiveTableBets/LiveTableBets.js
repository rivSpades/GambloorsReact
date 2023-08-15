import React, { useEffect, useState } from 'react';

function LiveTableBets(props) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket(
      'wss://ec2-54-145-243-39.compute-1.amazonaws.com/ws/bets/'
    );

    // Event handler for successful WebSocket connection
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    // Event handler for incoming WebSocket messages
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Update table data based on received data

      setTableData((previousData) => [...previousData, data]);
    };

    // Event handler for WebSocket close
    socket.onclose = (event) => {
      console.log('WebSocket connection closed.', event);
    };

    // Event handler for WebSocket errors
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    // eslint-disable-next-line
  }, []);

  const uniqueTableData = tableData.reduce((accumulator, currentItem) => {
    const exists = accumulator.some(
      (item) => JSON.stringify(item) === JSON.stringify(currentItem)
    );
    if (!exists) {
      accumulator.push(currentItem);
    }
    return accumulator;
  }, []);
  console.log(uniqueTableData);
  let tableRows;
  if (tableData) {
    tableRows = uniqueTableData.map(function (row, index) {
      if (row && row.bet) {
        return (
          <tr key={index} className="bg-transparent border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-white whitespace-nowrap"
            >
              Dice
            </th>
            <td className="px-6 py-4">{row.bet.user}</td>

            <td className="px-6 py-4">{row.bet.bet_amount}</td>

            <td className="px-6 py-4 hidden lg:table-cell">
              {row.bet.payout_multiplier}
            </td>
          </tr>
        );
      }
      return '';
    });

    console.log(tableRows);
  }

  return (
    <section className="relative  lg:h-[50vh]   ">
      <table className="w-full text-sm text-center text-primaryWhite">
        <thead className="text-xs uppercase bg-transparent ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Game
            </th>
            <th scope="col" className="px-6 py-3">
              Player
            </th>

            <th scope="col" className="px-6 py-3">
              Wager
            </th>

            <th scope="col" className="px-6 py-3 hidden lg:table-cell">
              Multiplier
            </th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </section>
  );
}

export default React.memo(LiveTableBets);
