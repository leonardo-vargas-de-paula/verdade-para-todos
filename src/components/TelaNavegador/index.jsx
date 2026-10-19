import "./styles.css";

/* Simulação minimalista de uma janela de navegador com barra de endereço.
   O conteúdo (título e texto da notícia) continua sendo texto real, para
   funcionar com o controle de tamanho de fonte e com leitores de tela. */
function TelaNavegador({
  url,
  titulo,
  texto,
  legenda = "Simulação de tela de navegador — informações fictícias",
  children,
}) {
  return (
    <figure className="tela-navegador">
      <figcaption className="tela-navegador__legenda">
        {legenda}
      </figcaption>

      <div className="tela-navegador__janela">
        <div className="tela-navegador__barra">
          <span className="tela-navegador__pontos" aria-hidden="true">
            <span className="tela-navegador__ponto" />
            <span className="tela-navegador__ponto" />
            <span className="tela-navegador__ponto" />
          </span>
          <span className="tela-navegador__url">
            <span className="tela-navegador__oculto">Endereço do site: </span>
            {url}
          </span>
        </div>

        <div className="tela-navegador__conteudo">
          {children ?? (
            <article className="tela-navegador__noticia">
              {titulo && <h3>{titulo}</h3>}
              {texto && <p>{texto}</p>}
            </article>
          )}
        </div>
      </div>
    </figure>
  );
}

export default TelaNavegador;
