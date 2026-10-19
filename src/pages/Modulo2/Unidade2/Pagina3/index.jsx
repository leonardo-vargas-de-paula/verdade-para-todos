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

/* Exercícios de análise — Módulo 2, Unidade 2, Exercício 2 de 2.
   A unidade é concluída ao finalizar este último exercício. */
const ROTA_UNIDADE = "/modulo/2/unidade/2";
const CHAVE_RESULTADOS = "vpt:modulo2:unidade2";
const TOTAL_EXERCICIOS = 2;
const EXERCICIO = {
  enunciado:
    "Imagine que você está navegando na internet e encontra a seguinte publicação:",
  noticia: {
    url: "piadas.org",
    titulo:
      'Desnotícia: Anvisa libera detergente para "limpeza intestinal", afirma Dr. Irineu',
    texto:
      'Após o recolhimento de um lote defeituoso, uma suposta nova nota da Anvisa confirmou que a fórmula atual do detergente Ypê atingiu um nível de pureza tão alto que se tornou segura para o consumo humano. A recomendação inusitada foi endossada pelo renomado infectologista Dr. Irineu Você Não Sabe nem Eu, que atestou a segurança do produto para a regulação da flora intestinal dos brasileiros.',
  },
  alternativas: [
    "O texto aparenta ser uma sátira e não uma notícia real.",
    "Confira nos canais oficiais da Anvisa e da marca se essa informação existe.",
    "Compartilhar como se fosse uma notícia verdadeira, porque parece engraçado.",
    "Acreditar, porque o texto cita um médico e uma marca conhecida.",
  ],
  corretas: [0, 1],
  explicacao:
    "O título começa com \"Desnotícia\" e o nome do médico parece uma piada, sinais de que o texto é uma sátira. Além disso, o nome do site é piadas.org, que é um forte indicativo de que não se trata de uma notícia real.",
};

function Pagina3() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercício 2 de 2");

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
            : "Módulo 2 · Unidade 2 · Exercício 2 de 2"
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
              to: "/modulo/2/unidade/2/2",
              label: "◂ Exercício anterior",
              title: "Exercício 1",
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
            registrarResultado(CHAVE_RESULTADOS, 1, resultado)
          }
          onProximo={() => setFinalizado(true)}
          ultimo
        />
      )}
    </Layout>
  );
}

export default Pagina3;
