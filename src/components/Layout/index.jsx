import Header from "../Header";

function Layout({ children, showHeader = true }) {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      {showHeader && <Header />}
      <main id="conteudo">
        <div className="container">{children}</div>
      </main>
    </>
  );
}

export default Layout;
