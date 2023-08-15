function DiceBubbleRollValue(props) {
  return (
    <div className="border-[1.5rem] ml-[-3rem] border-transparent relative font-medium text-xl">
      <div
        style={{
          backgroundColor: props.isWinner
            ? 'rgba(155, 237, 154, 0.8)'
            : 'rgba(255, 153, 153, 0.8)',
          transform: 'rotate(45deg)',
          marginLeft: `${props.value}%`, // Add the margin-left here
        }}
        className="dice-range-bubble w-8 h-8 flex p-6 justify-center  "
      >
        <p className="dice-range-bubble-value -rotate-45 self-center">
          {props.value}
        </p>
      </div>
    </div>
  );
}

export default DiceBubbleRollValue;
