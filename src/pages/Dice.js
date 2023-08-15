import React, {
  useState,
  useRef,
  useReducer,
  useEffect,
  useContext,
} from 'react';

import MainSection from '../components/UI/MainSection';
import GameLayout from '../components/UI/GameLayout';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import DiceSlider from '../components/Games/DiceSlider';
import DiceHistory from '../components/Games/DiceHistory';
import DiceAutoBet from '../components/Games/DiceAutoBet';
import GameDescription from '../components/Games/GameDescription';
import AuthContext from '../store/context/auth-context';
import WalletContext from '../store/context/wallet-context';
import DiceBubbleRollValue from '../components/Games/DiceBubbleRollValue';
import useHttpRequest from '../hooks/use-httpRequest';
const initialState = {
  winChance: 0,
  edge: 2,
  payout: 0,
  multiplier: 0,

  rollValue: 50,
  rollType: 'Roll Under',
  rangeBackground: '',
  betAmount: 100,
  showBubble: false,

  diceData: { numbersHistory: [] },
  autoBet: {
    numberBets: '',
    maxBetAmount: '',
    balanceBelow: '',
    balanceAbove: '',
    winPreviousBet: '',
    onLoss: '',
    onWin: '',
  },
  showAutoBet: true,
};

const actionTypes = {
  CALC_WIN_CHANCE: 'CALC_WIN_CHANCE',
  CALC_PAYOUT: 'CALC_PAYOUT',
  CALC_MULTIPLIER: 'CALC_MULTIPLIER',
  SET_ROLL_VALUE: 'SET_ROLL_VALUE',
  GET_ROLL_TYPE: 'GET_ROLL_TYPE',
  SET_ROLL_TYPE: 'SET_ROLL_TYPE',
  SET_BET_AMOUNT: 'SET_BET_AMOUNT',
  SET_RANGE_BACKGROUND: 'SET_RANGE_BACKGROUND',
  GET_DICE_DATA: 'GET_DICE_DATA',

  SHOW_AUTO_BET: 'SHOW_AUTO_BET',
};

const diceReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CALC_WIN_CHANCE:
      const winChance =
        (1 /
          (100 /
            (state.rollType === 'Roll Under'
              ? state.rollValue
              : 100 - state.rollValue))) *
        100;
      return {
        ...state,
        winChance: winChance.toFixed(2),
      };
    case actionTypes.CALC_PAYOUT:
      const payout = (
        state.betAmount *
        ((100 - state.edge) /
          (state.rollType === 'Roll Under'
            ? state.rollValue
            : 100 - state.rollValue))
      ).toFixed(2);
      return {
        ...state,
        payout: payout,
      };
    case actionTypes.CALC_MULTIPLIER:
      const multiplier =
        (100 - state.edge) /
        (state.rollType === 'Roll Under'
          ? state.rollValue
          : 100 - state.rollValue);
      return {
        ...state,
        multiplier: multiplier.toFixed(2),
      };
    case actionTypes.SET_ROLL_VALUE:
      return {
        ...state,
        rollValue: Number(action.payload),
        showBubble: true,
      };

    case actionTypes.GET_DICE_DATA:
      console.log(state.diceData);
      return {
        ...state,
        diceData: {
          ...action.payload,
          numbersHistory: [
            ...state.diceData.numbersHistory,
            action.payload.rolled_dice,
          ],
        },
      };

    case actionTypes.SET_BET_AMOUNT:
      return {
        ...state,
        betAmount: Number(action.payload),
      };

    case actionTypes.SET_ROLL_TYPE:
      const calcNewRollValue = 50 + (50 - state.rollValue);

      return {
        ...state,
        rollType: action.payload,
        rollValue: calcNewRollValue,
      };
    case actionTypes.SET_RANGE_BACKGROUND:
      const rangeBackground =
        state.rollType === 'Roll Under'
          ? `linear-gradient(
          to right,
          rgba(155, 237, 154, 0.5) 0%,
          rgba(155, 237, 154, 0.5) ${state.rollValue}%,
          rgba(255, 153, 153, 0.5) ${state.rollValue}%,
          rgba(255, 153, 153, 0.5) 100%
        )`
          : `linear-gradient(
            to right,
            rgba(255, 153, 153, 0.5) 0%,
            rgba(255, 153, 153, 0.5) ${state.rollValue}%,
            rgba(155, 237, 154, 0.5) ${state.rollValue}%,
            rgba(155, 237, 154, 0.5) 100%
          )`;
      return {
        ...state,
        rangeBackground: rangeBackground,
      };
    case actionTypes.SET_BET_DATA:
      return {
        ...state,
        numberGenerated: action.payload,
      };
    case actionTypes.TOGGLE_MANUAL_AUTO:
      return {
        ...state,
        manualAutoBtn: {
          manual: !state.manualAutoBtn.manual,
          auto: !state.manualAutoBtn.auto,
        },
      };
    default:
      return state;
  }
};

function Dice() {
  const [showAutoBet, setShowAutoBet] = useState(false);

  const diceRangeInputRef = useRef();
  const diceBetAmountRef = useRef();
  const [state, dispatch] = useReducer(diceReducer, initialState);
  const authCtx = useContext(AuthContext);
  const { refreshWallet } = useContext(WalletContext);
  const { sendRequest, updateState } = useHttpRequest();
  useEffect(() => {
    updateInputsOnChange();
  }, [state.rollType]);

  function showAutoBetHandler(e) {
    if (e.target.classList.contains('dice-auto')) {
      setShowAutoBet(true);
      e.target.scrollIntoView({ behavior: 'smooth' });
    } else setShowAutoBet(false);
  }

  function updateInputsOnChange() {
    dispatch({
      type: 'SET_BET_AMOUNT',
      payload: diceBetAmountRef.current.value,
    });
    dispatch({
      type: 'SET_ROLL_VALUE',
      payload: diceRangeInputRef.current.value,
    });
    dispatch({ type: 'SET_RANGE_BACKGROUND' });
    dispatch({ type: 'CALC_WIN_CHANCE' });
    dispatch({ type: 'CALC_PAYOUT' });
    dispatch({ type: 'CALC_MULTIPLIER' });
  }

  function betSizeHandler(type) {
    if (type === 'min') {
      dispatch({
        type: 'SET_BET_AMOUNT',
        payload: 100,
      });
    } else if (type === '1/2') {
      if (diceBetAmountRef.current.value < 2) return;
      dispatch({
        type: 'SET_BET_AMOUNT',

        payload: diceBetAmountRef.current.value / 2,
      });
    } else if (type === 'x2') {
      dispatch({
        type: 'SET_BET_AMOUNT',

        payload: diceBetAmountRef.current.value * 2,
      });
    }
    dispatch({ type: 'CALC_PAYOUT' });
  }

  function changeRollTypeButtonsHandler(type) {
    if (type === 'over') {
      dispatch({
        type: 'SET_ROLL_TYPE',
        payload: 'Roll Over',
      });
    } else if (type === 'under') {
      dispatch({
        type: 'SET_ROLL_TYPE',
        payload: 'Roll Under',
      });
    }
  }

  async function sendBetHandler() {
    if (!authCtx) return;

    try {
      const data = await sendRequest(
        'https://still-frog-f6ef.riverspades336061.workers.dev/api/game_trx_historic/dice/single_bet/',
        'POST',
        {
          'type_game': 'dice',
          'user_winrate_choice': `${Number(state.winChance).toFixed(2)}`,
          'is_roll_under': state.rollType === 'Roll Under' ? true : false,
          'date_game': new Date().toISOString(),
          'bet_amount': state.betAmount,
          'coin_ticker': 'play',
        }
      );

      console.log(data);
      dispatch({
        type: 'GET_DICE_DATA',
        payload: data,
      });

      refreshWallet();
    } catch (err) {
      updateState({
        error: err.message,
      });
    }
  }

  return (
    <MainSection id="home-lobby" className="dice-classes ">
      <GameLayout>
        <section
          id="game-dice-container"
          className="flex flex-col-reverse xl:flex-row "
        >
          <div className="border border-accent border-t-0 xl:border-t  grow-0    flex flex-col gap-8 w-full xl:w-1/3  ">
            <div className="dice-container-left flex flex-col gap-8 xl:gap-2  ">
              <div>
                <div className=" p-6 xl:pb-0 bg-primary">
                  <Button
                    type="switch"
                    text={{ btn1: 'Manual', btn2: 'Auto' }}
                    onClick={showAutoBetHandler}
                  />
                </div>
                <div className="dice-body-container-left flex flex-col gap-4 p-8 ">
                  <div className="dice-inputs-container-left flex flex-col gap-8">
                    <div className="dice-bet-amount-container flex flex-col gap-4  ">
                      <Input
                        text="Bet Amount"
                        id="bet-amount"
                        unit="Play"
                        defaultValue={100}
                        value={state.betAmount}
                        ref={diceBetAmountRef}
                        handler={updateInputsOnChange}
                      />
                      <div className="flex gap-2">
                        <Button
                          type="control"
                          text="min"
                          onClick={() => betSizeHandler('min')}
                        />
                        <Button
                          type="control"
                          text="1/2"
                          onClick={() => betSizeHandler('1/2')}
                        />
                        <Button
                          type="control"
                          text="x2"
                          onClick={() => betSizeHandler('x2')}
                        />
                      </div>
                    </div>

                    <div className="input-title uppercase flex gap-4">
                      <span>Payout on Win:</span> <span>{state.payout}</span>
                    </div>

                    <Button
                      text={showAutoBet === false ? 'Bet' : 'Start Autobet'}
                      type="highlight"
                      className="w-full p-4 text-xl"
                      onClick={sendBetHandler}
                    />
                  </div>

                  <DiceAutoBet className={!showAutoBet && 'invisible'} />
                </div>
              </div>
            </div>
          </div>
          <div className="border border-l flex flex-col gap-16 xl:justify-between flex-grow  border-accent">
            <div>
              <div className="dice-settings-container text-primaryWhite bg-primary flex justify-end gap-6 p-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dice-pvfair-btn w-6 h-6 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dice-livestats-btn w-6 h-6 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"></path>
                </svg>
              </div>
              {state.showBubble && (
                <DiceHistory
                  number={state.diceData.rolled_dice}
                  isWinner={state.diceData.is_winner}
                />
              )}
            </div>
            <div className="flex flex-col p-8 ">
              <DiceBubbleRollValue
                isWinner={state.diceData.is_winner}
                value={state.diceData.rolled_dice}
              />

              <DiceSlider
                ref={diceRangeInputRef}
                handler={updateInputsOnChange}
                style={{ background: state.rangeBackground }}
                value={state.rollValue}
              />
            </div>
            <div className="flex gap-8 p-8">
              <Input
                text="Multiplier"
                unit="x"
                value={state.multiplier}
                className=""
              />
              <div className="flex w-full sm:w-1/4 items-center flex-col  gap-6 ">
                <Button
                  type="control"
                  text={`Over ${(100 - state.winChance).toFixed(2)}`}
                  className={` w-2/4 sm:w-1/2  p-3 ${
                    state.rollType === 'Roll Over' && 'dice-control-btn-active'
                  }`}
                  onClick={() => changeRollTypeButtonsHandler('over')}
                />
                <Button
                  type="control"
                  text={`Under ${state.winChance}`}
                  className={` w-2/4 sm:w-1/2  p-3 ${
                    state.rollType === 'Roll Under' && 'dice-control-btn-active'
                  }`}
                  onClick={() => changeRollTypeButtonsHandler('under')}
                />
              </div>
              <Input text="Win Chance" unit="%" value={state.winChance} />
            </div>
          </div>
        </section>
      </GameLayout>
      <GameDescription />
    </MainSection>
  );
}

export default Dice;
