import React, { useState, useEffect, useRef } from 'react';

function Button(props) {
  const [classes, setClasses] = useState('');
  const [svg, setSvg] = useState('');
  const switchBtn1Ref = useRef(null);
  const switchBtn2Ref = useRef(null);

  function SwitchSelectHandler(e) {
    if (e.target.classList.contains('dice-manual-auto-a-active')) {
      return;
    }

    switchBtn1Ref.current.classList.toggle('dice-manual-auto-a-active');
    switchBtn2Ref.current.classList.toggle('dice-manual-auto-a-active');

    if (props.onClick) props.onClick(e);
  }

  useEffect(() => {
    switch (props.type) {
      case 'highlight':
        setClasses('btn-highlight');
        break;
      case 'highlight-loading':
        setClasses('btn-highlight');
        break;
      case 'outline':
        setClasses('btn-outline');
        break;
      case 'control':
        setClasses('dice-control-btn ');
        break;
      case 'control-arrow-left':
        setClasses('dice-control-winchance-btn');
        setSvg(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"></path>
          </svg>
        );
        break;
      case 'control-arrow-right':
        setClasses('dice-control-winchance-btn');
        setSvg(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        );
        break;
      default:
        break;
    }
  }, [props.type]);

  const loadSpin = (
    <svg
      aria-hidden="true"
      role="status"
      className="inline w-4 h-4 mr-3 text-white animate-spin"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="#E5E7EB"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>
  );

  const switchTypeBtn = (
    <ul
      className="dice-manual-auto-container flex    rounded-lg p-2 bg-secondary "
      onClick={SwitchSelectHandler}
    >
      <li className="flex-grow">
        <button
          className="dice-manual w-full dice-manual-auto-a dice-manual-auto-a-active"
          ref={switchBtn1Ref}
        >
          {props.text.btn1}
        </button>
      </li>
      <li className="flex-grow">
        <button
          className="dice-auto dice-manual-auto-a w-full"
          ref={switchBtn2Ref}
        >
          {props.text.btn2}
        </button>
      </li>
    </ul>
  );

  const normalTypeBtn = (
    <button
      className={classes + ' w-fit ' + props.className}
      onClick={props.onClick}
    >
      {props.type === 'highlight-loading' && loadSpin}
      {svg}
      {props.text}
    </button>
  );

  return (
    <React.Fragment>
      {props.type === 'switch' ? switchTypeBtn : normalTypeBtn}
    </React.Fragment>
  );
}

export default Button;
