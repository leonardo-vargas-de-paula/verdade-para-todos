import { Link } from "react-router-dom";
import { ChevronRightIcon, CheckIcon } from "../icons";
import "./styles.css";

/* Cartão de unidade da página inicial do módulo — lista vertical simples.
   concluida = true mostra o selo de verificado (unidade toda visitada). */
function UnitCard({ number, title, to, concluida = false }) {
  return (
    <li>
      <Link className="unit-card" to={to}>
        <span className="unit-number" aria-hidden="true">
          {number}
          {concluida && <CheckIcon className="check-badge" />}
        </span>
        <span className="unit-text">
          <h2>{title}</h2>
        </span>
        <ChevronRightIcon className="go-arrow" />
      </Link>
    </li>
  );
}

export default UnitCard;
