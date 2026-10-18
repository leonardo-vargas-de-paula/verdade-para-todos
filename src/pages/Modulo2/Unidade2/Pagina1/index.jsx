import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import Exercicio from "../../../../components/Exercicio";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { marcarUnidadeConcluida } from "../../../../utils/progresso";

/* Exercícios de análise fictícios — textos provisórios,
   podem ser corrigidos depois. Cenários para treinar o julgamento. */
const ROTA_UNIDADE = "/modulo/2/unidade/2";
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
    explicacao:
      "Mensagens com tom de urgência e promessas de cura são sinais clássicos de desinformação. Confirme em fontes oficiais antes de repassar — e nunca compartilhe antes de checar.",
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
    explicacao:
      "Quando uma notícia diz que 'cientistas comprovaram' mas não indica o estudo, os pesquisadores nem onde foi publicado, não há como verificar. A ausência de fontes que possam ser conferidas é um dos principais sinais de alerta.",
  },
];

function Pagina1() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercícios de análise");

  const [indice, setIndice] = useState(0);
  const [resultados, setResultados] = useState([]);
  const [finalizado, setFinalizado] = useState(false);
  const concluido = finalizado;

  /* Terminou os exercícios → grava a unidade como concluída (trava de avanço). */
  useEffect(() => {
    if (finalizado) marcarUnidadeConcluida(ROTA_UNIDADE);
  }, [finalizado]);

  const handleResponder = (acertou) => {
    setResultados((anteriores) => [...anteriores, acertou]);
  };

  const handleProximo = () => {
    if (indice === EXERCICIOS.length - 1) setFinalizado(true);
    else setIndice((i) => i + 1);
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
        <UnitNav
          prev={{
            to: "/modulo/2/unidade/1",
            label: "◂ Unidade anterior",
            title: "Exercícios básicos",
          }}
          next={{
            to: "/modulos",
            label: "Voltar ao seletor ▸",
            title: "Escolha um módulo",
          }}
        />
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
