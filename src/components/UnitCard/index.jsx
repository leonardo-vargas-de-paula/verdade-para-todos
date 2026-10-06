import { Link } from "react-router-dom";
import { ChevronRightIcon } from "../icons";
import "./styles.css";

/* Cartão de unidade da página inicial do módulo — lista vertical simples. */
function UnitCard({ number, icon, title, to }) {
  return (
    <li>
      <Link className="unit-card" to={to}>
        <span className="unit-number" aria-hidden="true">
          {number}
        </span>
        <span className="unit-icon" aria-hidden="true">
          {icon}
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
