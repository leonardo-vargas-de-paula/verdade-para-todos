import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import IconList from "../../../../components/IconList";
import Callout from "../../../../components/Callout";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";

/* Primeira página da unidade de exercícios básicos: apresenta o formato
   "múltipla escolha" — cada pergunta tem apenas uma alternativa correta. */
function Pagina1() {
  useDocumentTitle("Módulo 2 · Unidade 1 — Exercícios básicos");

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/2" backLabel="Voltar ao Módulo 2" />}
        kicker="Módulo 2 · Unidade 1 · Antes de começar"
        title="Exercícios básicos"
      />

      <SectionCard title="Como funcionam os exercícios básicos">
        <p>
          Nesta unidade, você começa a praticar o que aprendeu no Módulo 1. As
          perguntas são de <strong>múltipla escolha</strong> e tratam do que é
          uma Fake News, de como reconhecê-la e do que fazer antes de
          compartilhar uma informação.
        </p>
        <p>
          Diferente dos exercícios de análise, aqui cada pergunta tem{" "}
          <strong>apenas uma alternativa correta</strong>. Você escolhe a opção
          que considera certa e recebe na hora um retorno dizendo se acertou.
        </p>
      </SectionCard>

      <SectionCard title="Como responder">
        <IconList
          items={[
            {
              title: "Leia a pergunta com atenção",
              text: "Cada exercício apresenta uma situação ou uma pergunta sobre o conteúdo do Módulo 1.",
            },
            {
              title: "Escolha uma única alternativa",
              text: "Toque ou clique na alternativa que você considera correta. Só é possível escolher uma por pergunta.",
            },
            {
              title: "Confira o retorno",
              text: "Assim que responder, você vê se acertou, qual era a resposta correta e uma explicação curta.",
            },
            {
              title: "Siga para a próxima",
              text: "As perguntas aparecem uma de cada vez. Você pode voltar para rever as anteriores e, no fim, vê quantas acertou.",
            },
          ]}
        />
      </SectionCard>

      <Callout variant="tip" title="Pode responder sem medo">
        O retorno aparece logo depois de cada resposta, com uma explicação
        curta. Se errar, aproveite para entender o motivo — no final, você verá
        o total de acertos e poderá praticar novamente quando quiser.
      </Callout>

      <UnitNav
        prev={{
          to: "/modulo/2",
          label: "◂ Voltar",
          title: "Módulo 2",
        }}
        next={{
          to: "/modulo/2/unidade/1/2",
          label: "Começar exercícios ▸",
          title: "Exercícios básicos",
        }}
      />
    </Layout>
  );
}

export default Pagina1;
