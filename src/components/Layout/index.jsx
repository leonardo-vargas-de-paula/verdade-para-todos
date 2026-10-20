import Header from "../Header";

function Layout({ children, showHeader = true }) {
  return (
    <>
      {showHeader && <Header />}
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}

export default Layout;
