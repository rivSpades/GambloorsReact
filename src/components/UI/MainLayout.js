function MainLayout(props) {
  return (
    <main className="relative bg-secondary  overflow-y-scroll overflow-hidden scroll-smooth h-screen select-none ">
      {props.children}
    </main>
  );
}

export default MainLayout;
