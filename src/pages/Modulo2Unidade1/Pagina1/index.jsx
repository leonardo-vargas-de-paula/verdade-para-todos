import { useState } from "react";
import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import SectionCard from "../../../components/SectionCard";
import Exercicio from "../../../components/Exercicio";
import UnitNav from "../../../components/UnitNav";
import useDocumentTitle from "../../../utils/useDocumentTitle";

/* Exercícios fictícios — textos provisórios, podem ser corrigidos depois. */
const EXERCICIOS = [
  {
    enunciado: "Qual das frases abaixo é um exemplo de fake news?",
    alternativas: [
      "O prefeito inaugurou uma nova praça no centro da cidade.",
      "Cientistas descobriram a cura instantânea de todas as doenças com um chá.",
      "O time local venceu o jogo de ontem pelo placar de 2 a 1.",
      "A biblioteca municipal funciona das 9h às 17h.",
    ],
    correta: 1,
  },
  {
    enunciado:
      "O que devemos fazer ao receber uma notícia muito chocante no celular?",
    alternativas: [
      "Compartilhar imediatamente para avisar os amigos.",
      "Conferir a fonte da informação antes de acreditar ou compartilhar.",
      "Ignorar qualquer notícia que seja novidade.",
      "Comentar com raiva na publicação.",
    ],
    correta: 1,
  },
];

function Pagina1() {
  useDocumentTitle("Módulo 2 · Unidade 1 — Exercícios de fixação");

  const [indice, setIndice] = useState(0);
  const [resultados, setResultados] = useState([]);
  const concluido = resultados.length === EXERCICIOS.length;
  const acertos = resultados.filter(Boolean).length;

  const handleResponder = (acertou) => {
    setResultados((anteriores) => [...anteriores, acertou]);
  };

  const handleProximo = () => {
    setIndice((i) => i + 1);
  };

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/modulo/2"
          backLabel="Voltar ao Módulo 2"
          trail={["Início", "Módulo 2", "Unidade 1"]}
        />
      }
    >
      <Hero
        kicker={
          concluido
            ? "Unidade 1 · Concluído"
            : `Unidade 1 · Exercício ${indice + 1} de ${EXERCICIOS.length}`
        }
        title="Exercícios de fixação"
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
            prev={{ to: "/modulo/2", label: "◂ Voltar", title: "Módulo 2" }}
          />
        </>
      ) : (
        <Exercicio
          key={indice}
          enunciado={EXERCICIOS[indice].enunciado}
          alternativas={EXERCICIOS[indice].alternativas}
          corretaIndex={EXERCICIOS[indice].correta}
          aoResponder={handleResponder}
          onProximo={handleProximo}
          ultimo={indice === EXERCICIOS.length - 1}
        />
      )}
    </Layout>
  );
}

export default Pagina1;
