function FormLayout(props) {
  return (
    <form
      autoComplete="off"
      onSubmit={props.submitHandler}
      className="flex flex-col gap-16"
    >
      <div className="flex flex-col gap-12 mt-8">{props.children}</div>
    </form>
  );
}

export default FormLayout;
