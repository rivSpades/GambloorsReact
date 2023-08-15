import React, { useContext, useEffect, useState, useRef } from 'react';

import AuthContext from '../../store/context/auth-context';
import WalletContext from '../../store/context/wallet-context';
function GameWallet() {
  const authCtx = useContext(AuthContext);
  const { walletDetails } = useContext(WalletContext);

  const dropdownRef = useRef(null);
  const walletContainerRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('PLAY_amount');

  const currencyChangeHandler = (currency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false);
  };

  const dropdownHandler = () => {
    if (!authCtx.isLoggedIn) return;

    setIsDropdownOpen(!isDropdownOpen);
  };

  const onClickOutsideHandler = (e) => {
    if (
      dropdownRef.current.contains(e.target) ||
      walletContainerRef.current.contains(e.target) ||
      dropdownRef.current.className.includes('hidden')
    ) {
      return;
    }

    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutsideHandler);

    return () => {
      document.removeEventListener('click', onClickOutsideHandler);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="dice-wallet-container relative" ref={walletContainerRef}>
      <div
        className="dice-input-container  w-64 cursor-pointer flex-grow sm:grow-0 "
        onClick={dropdownHandler}
      >
        <div className="dice-input dice-wallet-value "></div>

        <div className="dice-input dice-wallet-value ">
          {Number(walletDetails[selectedCurrency]).toFixed(7)}
        </div>
        <div className="flex gap-4">
          <span className="font-semibold">
            {selectedCurrency.split('_')[0]}
          </span>
          <svg
            className=" w-4 ml-1 h-auto"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1L8 8L1 1"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {authCtx.isLoggedIn && (
        <ul
          className={`dice-wallet-dropdown ${
            !isDropdownOpen && 'hidden'
          } dice-input-container  absolute w-64  cursor-pointer flex-grow sm:grow-0 flex-col `}
          ref={dropdownRef}
        >
          {Object.entries(walletDetails).map(([currency, balance]) => (
            <li
              key={currency}
              className="dice-wallet-value-container flex  justify-between group hover:bg-accent  rounded-lg p-4"
              onClick={() => currencyChangeHandler(currency)}
            >
              <div className="dice-input dice-wallet-value group-hover:bg-accent  ">
                {Number(balance).toFixed(7)}
              </div>
              <span className="font-semibold w-1/4 ">
                {currency.split('_')[0]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GameWallet;
