import { useState } from "react";
import { ChevronLeftIcon } from "../icons";
import ConfirmDialog from "../ConfirmDialog";
import "./styles.css";

/* Linha de ações do exercício: "Voltar" no canto esquerdo (quando aplicável)
   e o botão de confirmar/avançar no canto direito. O voltar sempre pergunta
   antes de sair, para evitar toque acidental. */
function ExercicioAcoes({ onVoltar, children }) {
  const [dialogAberto, setDialogAberto] = useState(false);

  const handleConfirmarVoltar = () => {
    setDialogAberto(false);
    onVoltar?.();
  };

  return (
    <>
      <div className="exercise-actions">
        {onVoltar && (
          <div className="exercise-actions-left">
            <button
              type="button"
              className="btn-voltar-exercicio"
              onClick={() => setDialogAberto(true)}
            >
              <ChevronLeftIcon />
              Voltar
            </button>
          </div>
        )}
        <div className="exercise-actions-right">{children}</div>
      </div>

      {onVoltar && (
        <ConfirmDialog
          open={dialogAberto}
          title="Voltar ao exercício anterior?"
          message="Você vai sair deste exercício e voltar ao exercício anterior. Suas respostas já confirmadas continuam salvas. Deseja voltar?"
          confirmLabel="Sim, voltar"
          cancelLabel="Não, continuar aqui"
          onConfirm={handleConfirmarVoltar}
          onCancel={() => setDialogAberto(false)}
        />
      )}
    </>
  );
}

export default ExercicioAcoes;
