import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightIcon, CheckIcon, LockIcon } from "../icons";
import ConfirmDialog from "../ConfirmDialog";
import "./styles.css";

/* Cartão de unidade/módulo — lista vertical simples.
   concluida = true mostra o selo de verificado (tudo visitado).
   bloqueada = true deixa o cartão travado (precisa terminar o anterior);
   o clique abre um diálogo com atalho para o conteúdo pendente.
   tipo="unidade" (padrão) ou "modulo" só muda o texto dos avisos. */
function UnitCard({
  number,
  title,
  to,
  concluida = false,
  bloqueada = false,
  anteriorTo,
  anteriorTitulo,
  tipo = "unidade",
}) {
  const navigate = useNavigate();
  const [dialogoAberto, setDialogoAberto] = useState(false);

  const textos =
    tipo === "modulo"
      ? {
          hint: "Termine o módulo anterior para liberar",
          dialogoTitulo: "Módulo ainda não liberado",
          dialogoMensagem: anteriorTitulo
            ? `Termine o módulo "${anteriorTitulo}" para continuar.`
            : "Termine o módulo anterior para continuar.",
          dialogoConfirmar: "Ir para o módulo anterior",
        }
      : {
          hint: "Termine a unidade anterior para liberar",
          dialogoTitulo: "Unidade ainda não liberada",
          dialogoMensagem: anteriorTitulo
            ? `Termine a unidade "${anteriorTitulo}" para continuar.`
            : "Termine a unidade anterior para continuar.",
          dialogoConfirmar: "Ir para a unidade anterior",
        };

  const conteudo = (
    <>
      <span className="unit-number" aria-hidden="true">
        {number}
        {concluida && !bloqueada && <CheckIcon className="check-badge" />}
      </span>
      <span className="unit-text">
        <h2>{title}</h2>
        {bloqueada && <p className="unit-hint">{textos.hint}</p>}
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
          title={textos.dialogoTitulo}
          message={textos.dialogoMensagem}
          confirmLabel={textos.dialogoConfirmar}
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
