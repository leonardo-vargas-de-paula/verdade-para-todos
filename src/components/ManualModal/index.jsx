import { useEffect, useRef, useState } from "react";
import { useManual } from "../../contexts/ManualContext";
import { marcarManualVisto } from "../../utils/manual";
import ConfirmDialog from "../ConfirmDialog";
import { CloseIcon } from "../icons";
import { PASSOS } from "./passos";
import "./styles.css";

/* Manual do curso em passos — pop-up grande que orienta o usuário.
   Abre sozinho na primeira visita (ver ManualContext) ou pelo botão
   "Manual" no cabeçalho.
   Fechamentos possíveis:
   - "Começar agora" (último passo) → marca como visto e fecha;
   - botão X (ou ESC / clique fora) → pede confirmação; ao sair, marca
     como visto e apenas fecha, mantendo o usuário na tela atual. */
function ManualModal() {
  const { aberto, fecharManual } = useManual();
  const [passo, setPasso] = useState(0);
  const [confirmarSaida, setConfirmarSaida] = useState(false);
  const cardRef = useRef(null);

  const total = PASSOS.length;
  const ultimo = passo === total - 1;
  const { Icone, titulo, texto } = PASSOS[passo];

  /* Ao (re)abrir, volta ao primeiro passo e limpa a confirmação. */
  useEffect(() => {
    if (aberto) {
      setPasso(0);
      setConfirmarSaida(false);
    }
  }, [aberto]);

  /* Foco entra no diálogo ao abrir — o leitor de tela lê o conteúdo. */
  useEffect(() => {
    if (aberto && cardRef.current) {
      cardRef.current.focus();
    }
  }, [aberto]);

  /* ESC pede confirmação; Tab fica preso dentro do diálogo. */
  useEffect(() => {
    if (!aberto || confirmarSaida) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setConfirmarSaida(true);
        return;
      }
      if (event.key === "Tab" && cardRef.current) {
        const focusaveis = cardRef.current.querySelectorAll("button");
        const primeiro = focusaveis[0];
        const ultimoEl = focusaveis[focusaveis.length - 1];
        if (event.shiftKey && document.activeElement === primeiro) {
          event.preventDefault();
          ultimoEl.focus();
        } else if (!event.shiftKey && document.activeElement === ultimoEl) {
          event.preventDefault();
          primeiro.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [aberto, confirmarSaida]);

  if (!aberto) return null;

  /* Concluir ou sair com confirmação: marcar como visto e fechar,
     permanecendo na tela atual. */
  const finalizar = () => {
    marcarManualVisto();
    fecharManual();
  };

  const sair = () => {
    setConfirmarSaida(false);
    finalizar();
  };

  return (
    <div
      className="manual-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) setConfirmarSaida(true);
      }}
    >
      <div
        className="manual-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="manual-titulo"
        aria-describedby="manual-texto"
        tabIndex={-1}
        ref={cardRef}
      >
        <button
          type="button"
          className="manual-close"
          onClick={() => setConfirmarSaida(true)}
          aria-label="Sair do manual"
        >
          <CloseIcon className="manual-close-icon" />
          <span className="manual-close-tip" role="tooltip">
            Sair
          </span>
        </button>

        <div className="manual-progress">
          <span className="manual-progress-text">
            Passo {passo + 1} de {total}
          </span>
          <span className="manual-dots" aria-hidden="true">
            {PASSOS.map((_, indice) => (
              <span
                key={indice}
                className={
                  "manual-dot" +
                  (indice === passo ? " ativo" : "") +
                  (indice < passo ? " feito" : "")
                }
              />
            ))}
          </span>
        </div>

        <div className="manual-step" aria-live="polite">
          <span className="manual-icon" aria-hidden="true">
            <Icone />
          </span>
          <h2 id="manual-titulo" className="manual-titulo">
            {titulo}
          </h2>
          <p id="manual-texto" className="manual-texto">
            {texto}
          </p>
        </div>

        <div className="manual-actions">
          {passo > 0 && (
            <button
              type="button"
              className="manual-btn voltar"
              onClick={() => setPasso((p) => Math.max(0, p - 1))}
            >
              ◂ Anterior
            </button>
          )}
          <button
            type="button"
            className="manual-btn proximo"
            onClick={() => (ultimo ? finalizar() : setPasso((p) => p + 1))}
          >
            {ultimo ? "Começar agora ▸" : "Próximo ▸"}
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={confirmarSaida}
        title="Sair do manual?"
        message="Você pode abrir o manual de novo depois, pelo botão 'Manual' no topo da tela. Quer mesmo sair agora?"
        confirmLabel="Sim, sair"
        cancelLabel="Continuar o manual"
        onConfirm={sair}
        onCancel={() => setConfirmarSaida(false)}
      />
    </div>
  );
}

export default ManualModal;
