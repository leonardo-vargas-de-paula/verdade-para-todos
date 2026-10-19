import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import ExercicioChecklist from "../../../../components/ExercicioChecklist";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { marcarUnidadeConcluida } from "../../../../utils/progresso";
import {
  lerResultados,
  registrarResultado,
} from "../../../../utils/resultadosExercicios";

/* Exercícios de análise — Módulo 2, Unidade 2, Exercício 3 de 3.
   A unidade é concluída ao finalizar este último exercício. */
const ROTA_UNIDADE = "/modulo/2/unidade/2";
const CHAVE_RESULTADOS = "vpt:modulo2:unidade2";
const TOTAL_EXERCICIOS = 3;
const EXERCICIO = {
  enunciado:
    "Imagine que você está navegando na internet e encontra a seguinte notícia:",
  noticia: {
    url: "www.meteorologia.com.br",
    titulo:
      "Meteorologistas confirmam intensificação do El Niño; relatório alerta para seca extrema nos próximos 15 dias",
    texto:
      "O Instituto Nacional de Meteorologia (Inmet) confirmou nesta semana que o fenômeno El Niño, caracterizado pelo aquecimento anormal das águas do Oceano Pacífico Equatorial, continuará alterando o clima brasileiro nos próximos meses. Como é o padrão deste evento climático, a previsão aponta para um volume de chuvas acima da média histórica na região Sul e períodos de seca intensificada nas regiões Norte e Nordeste do Brasil.",
    publicadoEm: "19 de outubro de 2026",
  },
  alternativas: [
    "É um ponto fraco não apresentar o autor da notícia de forma clara.",
    "Devo verificar se o instituto citado de fato existe.",
    "Devo procurar o relatório original do Inmet para conferir os dados baseado na data de publicação apresentada.",
    "A notícia é confiável só porque cita o Inmet e usa termos científicos.",
  ],
  corretas: [0, 1, 2],
  explicacao:
    "A notícia tem pontos fortes: cita um instituto conhecido que atua no tema do texto, usa linguagem científica de forma clara e apresenta a data de publicação. Mas também tem pontos fracos: não identifica o autor e não indica o relatório original."
};

function Pagina4() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercício 3 de 3");

  const [finalizado, setFinalizado] = useState(false);
  const exatos = finalizado
    ? lerResultados(CHAVE_RESULTADOS).filter((resultado) => resultado?.exato)
        .length
    : 0;

  /* Terminou os exercícios → grava a unidade como concluída (trava de avanço). */
  useEffect(() => {
    if (finalizado) marcarUnidadeConcluida(ROTA_UNIDADE);
  }, [finalizado]);

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/2" backLabel="Voltar ao Módulo 2" />}
        kicker={
          finalizado
            ? "Módulo 2 · Unidade 2 · Concluído"
            : "Módulo 2 · Unidade 2 · Exercício 3 de 3"
        }
        title="Exercícios de análise"
      />

      {finalizado ? (
        <>
          <SectionCard title="Exercícios concluídos!">
            <p>Você terminou os exercícios desta unidade.</p>
            <p>
              Você acertou por completo <strong>{exatos}</strong> de{" "}
              <strong>{TOTAL_EXERCICIOS}</strong> exercícios.
            </p>
            <p>
              Lembre-se: nestes exercícios pode haver mais de uma alternativa
              correta, e o importante é reconhecer todos os sinais de alerta.
              Sempre que quiser, revise o conteúdo no Módulo 1 e volte para
              praticar novamente.
            </p>
          </SectionCard>
          <UnitNav
            prev={{
              to: "/modulo/2/unidade/2/3",
              label: "◂ Exercício anterior",
              title: "Exercício 2",
            }}
            next={{
              to: "/modulos",
              label: "Voltar ao seletor ▸",
              title: "Escolha um módulo",
            }}
          />
        </>
      ) : (
        <ExercicioChecklist
          enunciado={EXERCICIO.enunciado}
          noticia={EXERCICIO.noticia}
          alternativas={EXERCICIO.alternativas}
          corretas={EXERCICIO.corretas}
          explicacao={EXERCICIO.explicacao}
          aoResponder={(resultado) =>
            registrarResultado(CHAVE_RESULTADOS, 2, resultado)
          }
          onProximo={() => setFinalizado(true)}
          ultimo
        />
      )}
    </Layout>
  );
}

export default Pagina4;
