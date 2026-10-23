import { useState } from "react";
import SectionCard from "../SectionCard";
import Callout from "../Callout";
import ExercicioAcoes from "../ExercicioAcoes";
import "./styles.css";

const LETTERS = ["A", "B", "C", "D"];

/* Exercício de múltipla escolha (2 ou mais alternativas).
   Uma pergunta por vez; após responder, mostra feedback
   (cor + ícone + texto) e o botão para avançar.
   `explicacao` (opcional) é um texto extra mostrado no feedback.
   `respostaInicial` mantém a alternativa escolhida ao voltar para uma pergunta;
   `onVoltar` (opcional) exibe o botão de voltar quando há exercício anterior. */
function Exercicio({
  enunciado,
  alternativas,
  corretaIndex,
  explicacao,
  respostaInicial = null,
  aoResponder,
  onVoltar,
  onProximo,
  ultimo,
}) {
  const [selecionada, setSelecionada] = useState(respostaInicial);
  const respondida = selecionada !== null;
  const acertou = selecionada === corretaIndex;
  const mostrarAcoes = respondida || Boolean(onVoltar);

  const handleEscolher = (index) => {
    if (respondida) return;
    setSelecionada(index);
    aoResponder?.(index === corretaIndex, index);
  };

  return (
    <>
      <SectionCard className="exercicio-card">
        <p className="exercise-enunciado">{enunciado}</p>
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

      {mostrarAcoes && (
        <ExercicioAcoes onVoltar={onVoltar}>
          {respondida && (
            <button type="button" className="btn-next" onClick={onProximo}>
              {ultimo ? "Finalizar exercícios ▸" : "Próximo exercício ▸"}
            </button>
          )}
        </ExercicioAcoes>
      )}
    </>
  );
}

export default Exercicio;
