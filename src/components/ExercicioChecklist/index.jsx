import { useState } from "react";
import SectionCard from "../SectionCard";
import Callout from "../Callout";
import TelaNavegador from "../TelaNavegador";
import PostagemRedeSocial from "../PostagemRedeSocial";
import ExercicioAcoes from "../ExercicioAcoes";
import { CheckIcon } from "../icons";
import "./styles.css";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

/* Exercício de análise em formato de "checklist" (2 ou mais alternativas).
   Diferente do Exercicio (múltipla escolha, uma resposta certa), aqui pode
   haver mais de uma alternativa correta: o usuário marca quantas quiser e
   confirma. O feedback tem três estados — acertou tudo, acertou em parte,
   errou tudo — sempre com ícone + texto além da cor.
   `resultadoInicial` restaura o que já foi marcado/confirmado ao voltar;
   `aoAlterar` guarda as marcações antes mesmo da confirmação. */
function ExercicioChecklist({
  enunciado,
  noticia,
  postagem,
  alternativas,
  corretas = [],
  explicacao,
  resultadoInicial,
  aoResponder,
  aoAlterar,
  onVoltar,
  onProximo,
  ultimo,
}) {
  const selecionadasIniciais = Array.isArray(resultadoInicial?.selecionadas)
    ? resultadoInicial.selecionadas
    : [];
  const [marcadas, setMarcadas] = useState(selecionadasIniciais);
  const [confirmado, setConfirmado] = useState(
    resultadoInicial?.confirmado === true &&
      Array.isArray(resultadoInicial?.selecionadas)
  );

  const corretasSet = new Set(corretas);
  const total = corretas.length;
  const acertos = confirmado
    ? marcadas.filter((i) => corretasSet.has(i)).length
    : 0;
  const exato = confirmado && acertos === total && marcadas.length === total;

  const alternar = (index) => {
    if (confirmado) return;
    const proximas = marcadas.includes(index)
      ? marcadas.filter((i) => i !== index)
      : [...marcadas, index];
    setMarcadas(proximas);
    aoAlterar?.(proximas);
  };

  const confirmar = () => {
    if (confirmado || marcadas.length === 0) return;
    const acertosMarcados = marcadas.filter((i) => corretasSet.has(i)).length;
    setConfirmado(true);
    aoResponder?.({
      acertos: acertosMarcados,
      total,
      exato: acertosMarcados === total && marcadas.length === total,
      selecionadas: marcadas,
      confirmado: true,
    });
  };

  /* Estado visual/descritivo de cada alternativa, considerando o que o
     usuário marcou e o gabarito (`corretas`). */
  const estadoDaAlternativa = (index) => {
    const marcada = marcadas.includes(index);
    if (!confirmado) return marcada ? "selected" : "";
    const correta = corretasSet.has(index);
    if (correta && marcada) return "correct";
    if (!correta && marcada) return "wrong";
    if (correta && !marcada) return "missed";
    return "";
  };

  let feedback = null;
  if (confirmado) {
    if (exato) {
      feedback = {
        variant: "success",
        icon: <CheckIcon className="icon" />,
        title: "Muito bem!",
        texto: `Você marcou todas as ${total} alternativas corretas.`,
      };
    } else if (acertos > 0) {
      feedback = {
        variant: "tip",
        title: "Quase lá",
        texto: `Você marcou ${acertos} de ${total} alternativas corretas. Confira abaixo o que faltou ou o que marcou a mais.`,
      };
    } else {
      feedback = {
        variant: "danger",
        title: "Não foi dessa vez",
        texto:
          "Nenhuma das alternativas que você marcou estava correta. Veja abaixo quais eram as respostas certas.",
      };
    }
  }

  return (
    <div className="exercicio-checklist">
      <SectionCard className="exercicio-card">
        <p className="exercise-enunciado">{enunciado}</p>
        {noticia && <TelaNavegador {...noticia} />}
        {postagem && <PostagemRedeSocial {...postagem} />}
        <p className="checklist-instrucao">
          Marque todas as alternativas que você considera corretas. Pode haver
          mais de uma.
        </p>
        <div
          className="alternatives"
          role="group"
          aria-label="Alternativas — marque uma ou mais"
        >
          {alternativas.map((alternativa, index) => {
            const estado = estadoDaAlternativa(index);
            const marcada = marcadas.includes(index);
            return (
              <button
                key={alternativa}
                type="button"
                role="checkbox"
                aria-checked={marcada}
                className={`alternative ${estado}`.trim()}
                onClick={() => alternar(index)}
                disabled={confirmado}
              >
                <span className="letter" aria-hidden="true">
                  {LETTERS[index]}
                </span>
                <span className="alternative-body">
                  <span className="alternative-text">{alternativa}</span>
                  {confirmado && (
                    <span className="alt-status">
                      {estado === "correct" && "Resposta correta"}
                      {estado === "wrong" && "Resposta incorreta"}
                      {estado === "missed" && "Era uma resposta correta"}
                    </span>
                  )}
                </span>
                <span className="checkbox" aria-hidden="true">
                  {marcada && <CheckIcon className="checkbox-icon" />}
                </span>
              </button>
            );
          })}
        </div>
      </SectionCard>

      {feedback && (
        <Callout
          variant={feedback.variant}
          icon={feedback.icon}
          title={feedback.title}
        >
          {feedback.texto}
        </Callout>
      )}

      {confirmado && explicacao && (
        <p className="exercise-explicacao">{explicacao}</p>
      )}

      <ExercicioAcoes onVoltar={onVoltar}>
        {confirmado ? (
          <button type="button" className="btn-next" onClick={onProximo}>
            {ultimo ? "Finalizar exercícios ▸" : "Próximo exercício ▸"}
          </button>
        ) : (
          <button
            type="button"
            className="btn-next"
            onClick={confirmar}
            disabled={marcadas.length === 0}
          >
            Confirmar resposta
          </button>
        )}
      </ExercicioAcoes>
    </div>
  );
}

export default ExercicioChecklist;
