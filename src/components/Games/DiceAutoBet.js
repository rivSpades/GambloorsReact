import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

function DiceAutoBet(props) {
  return (
    <div
      id="dice-autobet"
      ref={props.ref}
      className={`flex flex-col gap-2 ${props.className}`}
    >
      <Input text="Number of Bets" />
      <div className="dice-autobet-onloss flex flex-col ">
        <p className="input-title uppercase">On Loss</p>

        <div className="flex  items-center gap-2">
          <Button type="switch" text={{ btn1: 'reset', btn2: 'Increase' }} />
          <Input unit="%" />
        </div>
      </div>

      <div className="dice-autobet-onloss flex flex-col ">
        <p className="input-title uppercase">On Win</p>

        <div className="flex  items-center gap-2 ">
          <Button type="switch" text={{ btn1: 'reset', btn2: 'Increase' }} />
          <Input unit="%" />
        </div>
      </div>

      <Input text="Stop On Profit" unit="Play" />
      <Input text="Stop On Loss" unit="Play" />
    </div>
  );
}
export default DiceAutoBet;
