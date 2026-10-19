import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import IconList from "../../../../components/IconList";
import Callout from "../../../../components/Callout";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";

/* Primeira página da unidade de exercícios de análise: apresenta o formato
   "checklist" — mais de uma alternativa pode estar correta. */
function Pagina1() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercícios de análise");

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/2" backLabel="Voltar ao Módulo 2" />}
        kicker="Módulo 2 · Unidade 2 · Antes de começar"
        title="Exercícios de análise"
      />

      <SectionCard title="Um novo jeito de responder">
        <p>
          Nesta unidade, os exercícios são diferentes dos exercícios básicos.
          Aqui o objetivo é <strong>analisar uma situação</strong> e reconhecer
          todos os sinais que ajudam a tomar uma boa decisão.
        </p>
        <p>
          Por isso, cada exercício funciona como uma <strong>lista de
          verificação (checklist)</strong>: pode haver <strong>mais de uma
          alternativa correta</strong>. Você marca todas as que considerar
          certas.
        </p>
      </SectionCard>

      <SectionCard title="Como responder">
        <IconList
          items={[
            {
              title: "Leia a situação com atenção",
              text: "Cada exercício apresenta um cenário fictício parecido com algo do dia a dia.",
            },
            {
              title: "Marque uma ou mais alternativas",
              text: "Toque nas alternativas que você considera corretas. Pode marcar quantas quiser — não existe apenas uma resposta certa.",
            },
            {
              title: "Confirme para ver o resultado",
              text: "Ao tocar em \"Confirmar resposta\", o exercício mostra quais alternativas estavam corretas e quais você marcou.",
            },
          ]}
        />
      </SectionCard>

      <Callout variant="tip" title="Sem medo de errar">
        Você pode marcar várias alternativas e, se acertar algumas e esquecer
        outras, ainda recebe um retorno explicando o que faltou. O importante é
        treinar o olhar para reconhecer informações falsas ou enganosas.
      </Callout>

      <UnitNav
        prev={{
          to: "/modulo/2/unidade/1",
          label: "◂ Unidade anterior",
          title: "Exercícios básicos",
        }}
        next={{
          to: "/modulo/2/unidade/2/2",
          label: "Começar exercícios ▸",
          title: "Exercícios de análise",
        }}
      />
    </Layout>
  );
}

export default Pagina1;
