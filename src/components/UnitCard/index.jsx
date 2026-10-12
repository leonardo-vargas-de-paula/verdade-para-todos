import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightIcon, CheckIcon, LockIcon } from "../icons";
import ConfirmDialog from "../ConfirmDialog";
import "./styles.css";

/* Cartão de unidade da página inicial do módulo — lista vertical simples.
   concluida = true mostra o selo de verificado (unidade toda visitada).
   bloqueada = true deixa o cartão travado (precisa terminar a anterior);
   o clique abre um diálogo com atalho para a primeira unidade incompleta. */
function UnitCard({
  number,
  title,
  to,
  concluida = false,
  bloqueada = false,
  anteriorTo,
  anteriorTitulo,
}) {
  const navigate = useNavigate();
  const [dialogoAberto, setDialogoAberto] = useState(false);

  const conteudo = (
    <>
      <span className="unit-number" aria-hidden="true">
        {number}
        {concluida && !bloqueada && <CheckIcon className="check-badge" />}
      </span>
      <span className="unit-text">
        <h2>{title}</h2>
        {bloqueada && (
          <p className="unit-hint">Termine a unidade anterior para liberar</p>
        )}
      </span>
      {bloqueada ? (
        <LockIcon className="lock-icon" />
      ) : (
        <ChevronRightIcon className="go-arrow" />
      )}
    </>
  );

  if (bloqueada) {
    return (
      <li>
        <button
          type="button"
          className="unit-card locked"
          onClick={() => setDialogoAberto(true)}
        >
          {conteudo}
        </button>
        <ConfirmDialog
          open={dialogoAberto}
          title="Unidade ainda não liberada"
          message={
            anteriorTitulo
              ? `Termine a unidade "${anteriorTitulo}" para continuar.`
              : "Termine a unidade anterior para continuar."
          }
          confirmLabel="Ir para a unidade anterior"
          cancelLabel="Continuar aqui"
          onConfirm={() => {
            setDialogoAberto(false);
            if (anteriorTo) navigate(anteriorTo);
          }}
          onCancel={() => setDialogoAberto(false)}
        />
      </li>
    );
  }

  return (
    <li>
      <Link className="unit-card" to={to}>
        {conteudo}
      </Link>
    </li>
  );
}

export default UnitCard;
