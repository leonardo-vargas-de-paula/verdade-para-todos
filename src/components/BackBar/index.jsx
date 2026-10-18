import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "../icons";
import ConfirmDialog from "../ConfirmDialog";
import "./styles.css";

/* Botão Voltar sempre visível — porto seguro para o idoso.
   Pergunta antes de navegar, para evitar sair sem querer.
   Funciona para o Módulo 1 e, no futuro, para quaisquer módulos
   (é só passar outro backTo/backLabel). A orientação de "onde estou"
   é feita pelo kicker do Hero, que fica na mesma linha deste botão. */
function BackBar({
  backTo = "/modulo/1",
  backLabel = "Voltar ao Módulo 1",
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
    <>
      <Link className="btn-back" to={backTo} onClick={handleBackClick}>
        <ChevronLeftIcon />
        {backLabel}
      </Link>

      <ConfirmDialog
        open={dialogOpen}
        title={`${backLabel}?`}
        message="Você será levado de volta à seleção de unidades, saindo da página atual. Deseja continuar?"
        onConfirm={handleConfirm}
        onCancel={() => setDialogOpen(false)}
      />
    </>
  );
}

export default BackBar;
