import { useState } from "react";
import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import SectionCard from "../../../components/SectionCard";
import Exercicio from "../../../components/Exercicio";
import UnitNav from "../../../components/UnitNav";
import useDocumentTitle from "../../../utils/useDocumentTitle";

/* Exercícios de análise fictícios — textos provisórios,
   podem ser corrigidos depois. Cenários para treinar o julgamento. */
const EXERCICIOS = [
  {
    enunciado:
      "Você recebe no celular a mensagem: \"URGENTE: remédio caseiro cura a diabetes em 3 dias, comprovado por médicos!\" O que fazer?",
    alternativas: [
      "Repassar para a família e os amigos para avisar todo mundo.",
      "Desconfiar: procure confirmar a informação em meios confiáveis antes de acreditar ou compartilhar.",
      "Apagar a mensagem e fingir que ela não existe, sem nunca mais falar do assunto.",
      "Comprar o remédio imediatamente, porque urgência não espera.",
    ],
    correta: 1,
  },
  {
    enunciado:
      "Uma publicação afirma que \"cientistas franceses comprovaram\" uma descoberta, mas não mostra link, nome dos cientistas nem estudo nenhum. Qual é o principal sinal de alerta?",
    alternativas: [
      "O texto está escrito em português e não em francês.",
      "A publicação foi feita em uma rede social e não em um jornal impresso.",
      "Faltam fontes que possam ser conferidas — sem isso, não dá para confiar.",
      "A descoberta é muito boa para ser verdade, então deve ser mentira sempre.",
    ],
    correta: 2,
  },
];

function Pagina1() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercícios de análise");

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
          trail={["Início", "Módulo 2", "Unidade 2"]}
        />
      }
    >
      <Hero
        kicker={
          concluido
            ? "Unidade 2 · Concluído"
            : `Unidade 2 · Exercício ${indice + 1} de ${EXERCICIOS.length}`
        }
        title="Exercícios de análise"
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
              to: "/modulo/2",
              label: "◂ Voltar",
              title: "Módulo 2",
            }}
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
