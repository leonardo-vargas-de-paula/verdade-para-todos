import { useEffect, useRef } from "react";
import "./styles.css";

/* Diálogo de confirmação acessível — usado, por exemplo, quando o
   usuário clica na marca do header para voltar às boas-vindas.
   Abre com foco no "Não" (ação segura), ESC e clique fora cancelam.
   Sem `onConfirm`, mostra apenas o botão de cancelar (ex.: aviso de
   conteúdo trancado, em que a única saída é "Voltar"). */
function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Sim",
  cancelLabel = "Não",
  onConfirm,
  onCancel,
}) {
  const dialogRef = useRef(null);
  const cancelRef = useRef(null);

  useEffect(() => {
    if (open && cancelRef.current) {
      cancelRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCancel();
        return;
      }
      /* foco preso entre os dois botões enquanto o diálogo está aberto */
      if (event.key === "Tab" && dialogRef.current) {
        const buttons = dialogRef.current.querySelectorAll("button");
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      className="dialog-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onCancel();
      }}
    >
      <div
        className="dialog-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        ref={dialogRef}
      >
        <h2 id="confirm-dialog-title">{title}</h2>
        {message && <p>{message}</p>}
        <div className="dialog-actions">
          {onConfirm && (
            <button
              type="button"
              className="dialog-btn confirm"
              onClick={onConfirm}
            >
              {confirmLabel}
            </button>
          )}
          <button
            type="button"
            className="dialog-btn cancel"
            onClick={onCancel}
            ref={cancelRef}
          >
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
