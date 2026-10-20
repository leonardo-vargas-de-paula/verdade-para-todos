import { ImageIcon, UserIcon } from "../icons";
import "./styles.css";

/* Simulação minimalista de uma postagem em rede social.
   O texto e a descrição da imagem são conteúdo real (acessível e
   escalável); só a moldura imita a interface de uma rede social. */
function PostagemRedeSocial({
  nome,
  horario = "há 2 horas",
  texto,
  imagemSrc,
  imagemDescricao,
  imagemLegenda,
  legenda = "Simulação de postagem em rede social — conteúdo fictício",
}) {
  return (
    <figure className="postagem-rede">
      <figcaption className="postagem-rede__legenda">{legenda}</figcaption>

      <article className="postagem-rede__cartao">
        <header className="postagem-rede__cabecalho">
          <span className="postagem-rede__avatar" aria-hidden="true">
            <UserIcon className="postagem-rede__avatar-icone" />
          </span>
          <span className="postagem-rede__autor">
            <span className="postagem-rede__nome">{nome}</span>
            <span className="postagem-rede__horario">{horario}</span>
          </span>
        </header>

        <p className="postagem-rede__texto">{texto}</p>

        {imagemSrc ? (
          <img
            className="postagem-rede__imagem-arquivo"
            src={imagemSrc}
            alt={imagemDescricao || ""}
            loading="lazy"
            decoding="async"
          />
        ) : imagemDescricao ? (
          <div
            className="postagem-rede__imagem"
            role="img"
            aria-label={imagemDescricao}
          >
            <ImageIcon className="postagem-rede__imagem-icone" />
            <span className="postagem-rede__imagem-texto">
              Espaço para imagem
            </span>
          </div>
        ) : null}

        {imagemLegenda && (
          <p className="postagem-rede__imagem-legenda">{imagemLegenda}</p>
        )}
      </article>
    </figure>
  );
}

export default PostagemRedeSocial;
