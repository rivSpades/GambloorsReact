import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <div className="dice-betamount-container flex-grow   ">
        <label htmlFor={props.id} className="input-title">
          {props.text}
        </label>
        <div className=" dice-input-container items-center w-full ">
          <input
            type={props.type}
            id={props.id}
            className={`input bg-primary border-none outline-none text-primaryWhite w-full ${props.className}`}
            placeholder={props.placeholder}
            required={props.required}
            readOnly={props.readOnly}
            disabled={props.readOnly}
            value={props.value}
            defaultValue={props.defaultValue}
            ref={ref}
            onChange={props.handler}
          />
          <span className="font-semibold ">{props.unit}</span>
        </div>
      </div>
    </React.Fragment>
  );
});

export default Input;
