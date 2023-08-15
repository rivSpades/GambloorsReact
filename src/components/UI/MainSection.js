function MainSection(props) {
  const classes =
    'flex flex-col justify-start  lg:gap-0  mt-24 ' + props.className;
  return (
    <section id={props.id} className={classes}>
      {props.children}
    </section>
  );
}

export default MainSection;
