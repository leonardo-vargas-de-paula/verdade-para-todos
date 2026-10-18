import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrandIcon, HelpIcon } from "../icons";
import ConfirmDialog from "../ConfirmDialog";
import SoundToggle from "../SoundToggle";
import { useManual } from "../../contexts/ManualContext";
// Desativado temporariamente — para reativar, descomentar:
// import FontSizeControls from "../FontSizeControls";
import "./styles.css";

function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { abrirManual } = useManual();

  /* Evita sair da área do curso sem querer: pergunta antes de
     levar para a tela de boas-vindas. */
  const handleBrandClick = (event) => {
    event.preventDefault();
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    setDialogOpen(false);
    navigate("/");
  };

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link className="brand" to="/" onClick={handleBrandClick}>
          <BrandIcon />
          <span className="brand-text">
            Verdade para Todos
            <small>Letramento digital para idosos</small>
          </span>
        </Link>

        <div className="a11y-controls">
          <button
            type="button"
            className="header-manual"
            onClick={abrirManual}
            aria-label="Abrir o manual do curso"
            title="Manual"
          >
            <HelpIcon className="header-manual-icon" />
            <span className="header-manual-text">Manual</span>
          </button>
          <SoundToggle />
          {/* Desativado temporariamente — para reativar, descomentar:
          <FontSizeControls />
          */}
        </div>
      </div>

      <ConfirmDialog
        open={dialogOpen}
        title="Voltar à tela inicial?"
        message="Você será levado de volta à apresentação do curso, saindo da unidade atual. Deseja continuar?"
        onConfirm={handleConfirm}
        onCancel={() => setDialogOpen(false)}
      />
    </header>
  );
}

export default Header;
