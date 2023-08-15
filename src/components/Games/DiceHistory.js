import React, { useState, useEffect } from 'react';

function DiceHistory(props) {
  const color = props.isWinner ? 'bg-diceGreen' : 'bg-diceRed';
  const [history, setHistory] = useState([]);
  useEffect(() => {
    if (!props.number) return;
    if (history.length > 6) {
      setHistory((oldHistory) => [
        ...oldHistory.slice(1),
        <div
          className={`${color} text-secondary text-center  font-medium mr-2 px-2.5 py-0.5 min-w-[4rem] opacity-100   rounded-full`}
        >
          {props.number}
        </div>,
      ]);
    } else {
      setHistory((oldHistory) => [
        ...oldHistory,
        <div
          className={`${color} text-secondary text-center  font-medium mr-2 px-2.5 py-0.5 min-w-[4rem] opacity-100   rounded-full`}
        >
          {props.number}
        </div>,
      ]);
    }
    // eslint-disable-next-line
  }, [props.number]); //runs everytime , when there is component reavaluations

  return (
    <div className="dice-history flex  justify-center text-xl text-center  ">
      {history}
    </div>
  );
}
export default DiceHistory;
