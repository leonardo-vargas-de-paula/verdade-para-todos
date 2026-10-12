import Header from "../Header";

function Layout({ backBar, children, showHeader = true }) {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      {showHeader && <Header />}
      {backBar}
      <main id="conteudo">
        <div className="container">{children}</div>
      </main>
    </>
  );
}

export default Layout;
