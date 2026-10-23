import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import Exercicio from "../../../../components/Exercicio";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import {
  marcarUnidadeConcluida,
  unidadeConcluida,
} from "../../../../utils/progresso";

/* Exercícios básicos — Módulo 2, Unidade 1, página de exercícios.
   A introdução da unidade fica em /modulo/2/unidade/1. */
const ROTA_UNIDADE = "/modulo/2/unidade/1";
const EXERCICIOS = [
  {
    enunciado:
      "Quais características podem indicar que uma notícia encontrada na internet é falsa?",
    alternativas: [
      "Uma notícia é falsa se ela for postada no Facebook",
      "Texto extremamente alarmista sem nenhuma fonte ou autoridade para confirmar",
      "Se a notícia foi postada em um portal gratuito ela é falsa, pois informação é algo muito valioso",
      "Se você não conhece quem postou então ela é falsa",
    ],
    correta: 1,
    explicacao:
      "Desconfie de textos alarmistas e sem fonte. Uma notícia confiável indica quem disse, onde e quando, e pode ser conferida em outros veículos sérios.",
  },
  {
    enunciado:
      "Quais características indicam que uma notícia pode ser verdadeira?",
    alternativas: [
      "Se a manchete possuir muitas publicações no Instagram então ela pode ser verdadeira",
      "Se alguém muito importante te enviou ela só pode ser verdadeira",
      "Possui fonte e a mesma informação pode ser encontrada e confirmada em diferentes portais e sites",
      "A notícia fala exatamente o que você estava procurando, então a informação te encontrou",
    ],
    correta: 2,
    explicacao:
      "Uma informação confiável pode ser confirmada em mais de um lugar. Ter muitas curtidas ou compartilhamentos nas redes sociais não é prova de que é verdade.",
  },
  {
    enunciado:
      "Você acaba de encontrar uma receita caseira para curar artrite, anunciada com muitas curtidas nas redes sociais, o que você pode fazer?",
    alternativas: [
      "Faço a receita imediatamente",
      "Mostro para meus amigos para eles aprenderem também",
      "Pergunto para quem postou se funciona mesmo a receita e se ele já testou",
      "Pesquiso a informação em outros sites e busco o parecer de profissionais do assunto",
    ],
    correta: 3,
    explicacao:
      "Antes de acreditar ou compartilhar, pesquise em fontes confiáveis e ouça profissionais da área. Promessas de cura milagrosa costumam ser falsas e podem colocar sua saúde em risco.",
  },
  {
    enunciado: (
      <>
        Responda à questão de verdadeiro ou falso baseado no seguinte cenário
        fictício:
        <br />
        <br />
        O seu sobrinho te enviou uma manchete no celular mas você descobriu que
        se tratava de uma Fake News. Ele estava tentando te enganar?
      </>
    ),
    alternativas: ["Verdadeiro", "Falso"],
    correta: 1,
    explicacao:
      "Nem toda informação falsa é divulgada com o intuito de enganar: quem te enviou pode acreditar que se trata de algo verídico.",
  },
  {
    enunciado: (
      <>
        Responda à questão de verdadeiro ou falso baseado no seguinte cenário
        fictício:
        <br />
        <br />
        Sua filha te enviou uma Fake News que ela acredita fielmente ser
        verdade. Diante dessa situação, você deve mostrar para ela de forma
        calma quais pontos indicam que se trata de uma informação incorreta em
        um ambiente privado.
      </>
    ),
    alternativas: ["Verdadeiro", "Falso"],
    correta: 0,
    explicacao:
      "Evite ataques agressivos, especialmente em público. Aborde o tema de forma clara e tranquila para evitar constrangimentos.",
  },
];

function Pagina2() {
  useDocumentTitle("Módulo 2 · Unidade 1 — Exercícios básicos");

  const [indice, setIndice] = useState(0);
  /* Guarda, por pergunta, o índice da alternativa escolhida — assim o
     feedback permanece ao voltar para uma pergunta já respondida. */
  const [respostas, setRespostas] = useState([]);
  const [finalizado, setFinalizado] = useState(false);
  const concluido = finalizado;
  const acertos = respostas.reduce(
    (total, resposta, i) =>
      resposta === EXERCICIOS[i]?.correta ? total + 1 : total,
    0
  );
  /* `finalizado` cobre o render imediato; a persistência vem em seguida. */
  const unidadeCompleta = finalizado || unidadeConcluida(ROTA_UNIDADE);

  /* Terminou os exercícios → grava a unidade como concluída (trava de avanço). */
  useEffect(() => {
    if (finalizado) marcarUnidadeConcluida(ROTA_UNIDADE);
  }, [finalizado]);

  const handleResponder = (_acertou, alternativaEscolhida) => {
    setRespostas((anteriores) => {
      const proximas = [...anteriores];
      proximas[indice] = alternativaEscolhida;
      return proximas;
    });
  };

  const handleVoltar = () => {
    setIndice((i) => Math.max(0, i - 1));
  };

  const handleProximo = () => {
    if (indice === EXERCICIOS.length - 1) setFinalizado(true);
    else setIndice((i) => i + 1);
  };

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/2" backLabel="Voltar ao Módulo 2" />}
        kicker={
          concluido
            ? "Módulo 2 · Unidade 1 · Concluído"
            : `Módulo 2 · Unidade 1 · Exercício ${indice + 1} de ${EXERCICIOS.length}`
        }
        title="Exercícios básicos"
      />

      {concluido ? (
        <>
          <SectionCard title="Exercícios concluídos!">
            <p>Você terminou os exercícios desta unidade.</p>
            <p>
              Você acertou <strong>{acertos}</strong> de{" "}
              <strong>{EXERCICIOS.length}</strong> exercícios.
            </p>
            <p>
              Sempre que quiser, revise o conteúdo no Módulo 1 e volte para
              praticar novamente.
            </p>
          </SectionCard>
          <UnitNav
            prev={{
              to: "/modulo/2/unidade/1",
              label: "◂ Antes de começar",
              title: "Como responder",
            }}
            next={{
              to: "/modulo/2/unidade/2",
              label: "Próxima unidade ▸",
              title: "Exercícios de análise",
              ...(unidadeCompleta
                ? {}
                : {
                    bloqueado: true,
                    paginaFaltante: ROTA_UNIDADE,
                  }),
            }}
          />
        </>
      ) : (
        <Exercicio
          key={indice}
          enunciado={EXERCICIOS[indice].enunciado}
          alternativas={EXERCICIOS[indice].alternativas}
          corretaIndex={EXERCICIOS[indice].correta}
          explicacao={EXERCICIOS[indice].explicacao}
          respostaInicial={respostas[indice] ?? null}
          aoResponder={handleResponder}
          onVoltar={indice > 0 ? handleVoltar : undefined}
          onProximo={handleProximo}
          ultimo={indice === EXERCICIOS.length - 1}
        />
      )}
    </Layout>
  );
}

export default Pagina2;
