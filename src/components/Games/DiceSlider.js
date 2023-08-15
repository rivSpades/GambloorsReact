import React, { forwardRef } from 'react';
const DiceSlider = forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <input
        id="rangeValueContainer"
        className="dice-range w-full  rounded-lg"
        type="range"
        min="1.00"
        max="98.00"
        step="0.01"
        list="dice-range-list"
        onChange={props.handler}
        ref={ref}
        style={props.style}
        value={props.value}
      />
      <datalist
        id="dice-range-list"
        className="text-2xl rounded-sm text-primaryWhite  flex    justify-between items-center w-full    "
      >
        <option value="0" label="0" className="font-medium"></option>
        <option value="25" label="25" className="font-medium "></option>
        <option value="50" label="50" className="font-medium "></option>
        <option value="75" label="75" className="font-medium "></option>
        <option value="100" label="100" className="font-medium "></option>
      </datalist>
    </React.Fragment>
  );
});

export default DiceSlider;
