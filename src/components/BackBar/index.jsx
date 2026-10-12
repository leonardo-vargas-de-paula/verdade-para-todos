import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "../icons";
import ConfirmDialog from "../ConfirmDialog";
import "./styles.css";

/* Botão Voltar sempre visível — porto seguro para o idoso —
   mais a trilha (breadcrumb) mostrando onde o usuário está.
   Pergunta antes de navegar, para evitar sair sem querer.
   Funciona para o Módulo 1 e, no futuro, para quaisquer módulos
   (é só passar outro backTo/backLabel). */
function BackBar({
  backTo = "/modulo/1",
  backLabel = "Voltar ao Módulo 1",
  trail = [],
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = (event) => {
    event.preventDefault();
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    setDialogOpen(false);
    navigate(backTo);
  };

  return (
    <div className="back-bar">
      <div className="container">
        <Link className="btn-back" to={backTo} onClick={handleBackClick}>
          <ChevronLeftIcon />
          {backLabel}
        </Link>
        <nav className="trail" aria-label="Você está em">
          {trail.map((item, index) => (
            <Fragment key={item}>
              {index > 0 && <span aria-hidden="true">›</span>}
              <span
                className={index === trail.length - 1 ? "current" : undefined}
              >
                {item}
              </span>
            </Fragment>
          ))}
        </nav>
      </div>

      <ConfirmDialog
        open={dialogOpen}
        title={`${backLabel}?`}
        message="Você será levado de volta à seleção de unidades, saindo da página atual. Deseja continuar?"
        onConfirm={handleConfirm}
        onCancel={() => setDialogOpen(false)}
      />
    </div>
  );
}

export default BackBar;
