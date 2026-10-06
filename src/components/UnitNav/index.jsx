import { Link } from "react-router-dom";
import "./styles.css";

/* Navegação simples entre unidades — dois botões grandes, sem ambiguidade.
   prev/next: { to, label, title } */
function UnitNav({ prev, next }) {
  return (
    <nav className="unit-nav" aria-label="Navegação entre unidades">
      {prev && (
        <Link className="prev" to={prev.to}>
          <span className="label">{prev.label}</span>
          <span className="title">{prev.title}</span>
        </Link>
      )}
      {next && (
        <Link className="next" to={next.to}>
          <span className="label">{next.label}</span>
          <span className="title">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}

export default UnitNav;
