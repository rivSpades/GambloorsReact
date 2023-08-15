function GameLayout(props) {
  return (
    <div
      className={
        '  xl:mt-20 w-full  dice-container mb-32 lg:bg-primary  select-none    text-primaryWhite ' +
        props.className
      }
    >
      {props.children}
    </div>
  );
}

export default GameLayout;
