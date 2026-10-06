import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "../icons";
import "./styles.css";

/* Botão Voltar sempre visível — porto seguro para o idoso —
   mais a trilha (breadcrumb) mostrando onde o usuário está. */
function BackBar({ backTo = "/", backLabel = "Voltar ao Módulo 1", trail = [] }) {
  return (
    <div className="back-bar">
      <div className="container">
        <Link className="btn-back" to={backTo}>
          <ChevronLeftIcon />
          {backLabel}
        </Link>
        <nav className="trail" aria-label="Você está em">
          {trail.map((item, index) => (
            <Fragment key={item}>
              {index > 0 && <span aria-hidden="true">›</span>}
              <span className={index === trail.length - 1 ? "current" : undefined}>
                {item}
              </span>
            </Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default BackBar;
