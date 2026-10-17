import { useState } from "react";
import SectionCard from "../SectionCard";
import Callout from "../Callout";
import "./styles.css";

const LETTERS = ["A", "B", "C", "D"];

/* Exercício de múltipla escolha (2 ou mais alternativas).
   Uma pergunta por vez; após responder, mostra feedback
   (cor + ícone + texto) e o botão para avançar.
   `explicacao` (opcional) é um texto extra mostrado no feedback. */
function Exercicio({
  enunciado,
  alternativas,
  corretaIndex,
  explicacao,
  aoResponder,
  onProximo,
  ultimo,
}) {
  const [selecionada, setSelecionada] = useState(null);
  const respondida = selecionada !== null;
  const acertou = selecionada === corretaIndex;

  const handleEscolher = (index) => {
    if (respondida) return;
    setSelecionada(index);
    aoResponder?.(index === corretaIndex);
  };

  return (
    <>
      <SectionCard title={enunciado} className="exercicio-card">
        <div className="alternatives" role="group" aria-label="Alternativas">
          {alternativas.map((alternativa, index) => {
            let className = "alternative";
            if (respondida) {
              if (index === corretaIndex) className += " correct";
              else if (index === selecionada) className += " wrong";
            }
            return (
              <button
                key={alternativa}
                type="button"
                className={className}
                onClick={() => handleEscolher(index)}
                disabled={respondida}
              >
                <span className="letter" aria-hidden="true">
                  {LETTERS[index]}
                </span>
                {alternativa}
              </button>
            );
          })}
        </div>
      </SectionCard>

      {respondida && (
        <Callout
          variant={acertou ? "success" : "danger"}
          title={acertou ? "Muito bem!" : "Não foi dessa vez"}
        >
          {acertou
            ? "Você acertou! Continue assim."
            : `A resposta correta é a alternativa ${LETTERS[corretaIndex]}: ${alternativas[corretaIndex]}`}
        </Callout>
      )}

      {respondida && explicacao && (
        <p className="exercise-explicacao">{explicacao}</p>
      )}

      {respondida && (
        <div className="exercise-actions">
          <button type="button" className="btn-next" onClick={onProximo}>
            {ultimo ? "Finalizar exercícios ▸" : "Próximo exercício ▸"}
          </button>
        </div>
      )}
    </>
  );
}

export default Exercicio;
