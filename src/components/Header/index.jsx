import { Link } from "react-router-dom";
import { BrandIcon } from "../icons";
// Desativado temporariamente — para reativar, descomentar:
// import FontSizeControls from "../FontSizeControls";
import "./styles.css";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link className="brand" to="/">
          <BrandIcon />
          <span className="brand-text">
            Navegar com Cuidado
            <small>Letramento digital para idosos</small>
          </span>
        </Link>

        {/* Desativado temporariamente — para reativar, descomentar:
        <div className="a11y-controls">
          <FontSizeControls />
        </div>
        */}
      </div>
    </header>
  );
}

export default Header;
