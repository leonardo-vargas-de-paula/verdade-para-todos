import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import ExercicioChecklist from "../../../../components/ExercicioChecklist";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { marcarUnidadeConcluida } from "../../../../utils/progresso";

/* Exercícios de análise — Módulo 2, Unidade 2.
   Formato "checklist": cada exercício pode ter mais de uma alternativa
   correta (`corretas`). Cenários fictícios para treinar o julgamento. */
const ROTA_UNIDADE = "/modulo/2/unidade/2";
const EXERCICIOS = [
  {
    enunciado:
      "Você recebe no celular a mensagem: \"URGENTE: remédio caseiro cura a diabetes em 3 dias, comprovado por médicos!\" O que é adequado fazer?",
    alternativas: [
      "Repassar para a família e os amigos para avisar todo mundo.",
      "Desconfiar e procurar confirmar a informação em meios confiáveis antes de acreditar ou compartilhar.",
      "Procurar saber quem é o autor da mensagem e se há alguma fonte, estudo ou profissional citado.",
      "Comprar o remédio imediatamente, porque urgência não espera.",
    ],
    corretas: [1, 2],
    explicacao:
      "Mensagens com tom de urgência e promessas de cura são sinais clássicos de desinformação. Antes de repassar, confirme em fontes oficiais, veja quem assina o conteúdo e se há alguma fonte verificável — e nunca compartilhe antes de checar.",
  },
  {
    enunciado:
      "Uma publicação afirma que \"cientistas franceses comprovaram\" uma descoberta, mas não mostra link, nome dos cientistas nem estudo nenhum. Quais atitudes ajudam a avaliar se dá para confiar?",
    alternativas: [
      "Procurar o estudo original e verificar se foi publicado em uma fonte séria.",
      "Desconfiar quando não há fontes que possam ser conferidas.",
      "Confiar, porque a publicação está em uma rede social muito usada.",
      "Procurar a mesma informação em outros veículos confiáveis.",
    ],
    corretas: [0, 1, 3],
    explicacao:
      "Quando uma notícia diz que 'cientistas comprovaram' mas não indica o estudo, os pesquisadores nem onde foi publicado, não há como verificar. A ausência de fontes conferíveis é um dos principais sinais de alerta — e uma informação confiável costuma poder ser confirmada em mais de um lugar.",
  },
];

function Pagina2() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercícios de análise");

  const [indice, setIndice] = useState(0);
  const [resultados, setResultados] = useState([]);
  const [finalizado, setFinalizado] = useState(false);
  const concluido = finalizado;
  const exatos = resultados.filter((resultado) => resultado.exato).length;

  /* Terminou os exercícios → grava a unidade como concluída (trava de avanço). */
  useEffect(() => {
    if (finalizado) marcarUnidadeConcluida(ROTA_UNIDADE);
  }, [finalizado]);

  const handleResponder = (resultado) => {
    setResultados((anteriores) => [...anteriores, resultado]);
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
            ? "Módulo 2 · Unidade 2 · Concluído"
            : `Módulo 2 · Unidade 2 · Exercício ${indice + 1} de ${EXERCICIOS.length}`
        }
        title="Exercícios de análise"
      />

      {concluido ? (
        <>
          <SectionCard title="Exercícios concluídos!">
            <p>Você terminou os exercícios desta unidade.</p>
            <p>
              Você acertou por completo <strong>{exatos}</strong> de{" "}
              <strong>{EXERCICIOS.length}</strong> exercícios.
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
              to: "/modulo/2/unidade/2",
              label: "◂ Página anterior",
              title: "Como responder",
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
          key={indice}
          enunciado={EXERCICIOS[indice].enunciado}
          alternativas={EXERCICIOS[indice].alternativas}
          corretas={EXERCICIOS[indice].corretas}
          explicacao={EXERCICIOS[indice].explicacao}
          aoResponder={handleResponder}
          onProximo={handleProximo}
          ultimo={indice === EXERCICIOS.length - 1}
        />
      )}
    </Layout>
  );
}

export default Pagina2;
