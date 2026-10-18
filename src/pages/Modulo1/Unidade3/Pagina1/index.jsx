import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import IconList from "../../../../components/IconList";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";

function Pagina1() {
  useDocumentTitle("Unidade 3 — Como as Fake News são construídas");

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/1" backLabel="Voltar ao Módulo 1" />}
        kicker="Módulo 1 · Unidade 3 · Página 1 de 2"
        title="Como as Fake News são construídas"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "Imita uma informação verdadeira",
              text: "Fake news tentam copiar caracteristicas de uma noticia ou uma informação verdadeira, inclusive podendo misturar elementos da realidade mas de forma distorcida.",
            },
            {
              title: "Apelo emocional",
              text: "Notícias falsas tentam mexer com a sua emoção, seja para te deixar com medo, com raiva ou para te fazer rir.",
            },
          ]}
        />
      </SectionCard>

      <UnitNav
        prev={{
          to: "/unidade/2",
          label: "◂ Unidade anterior",
          title: "Os tipos de notícia falsa",
        }}
        next={{
          to: "/unidade/3/2",
          label: "Próxima página ▸",
          title: "Continuação",
        }}
      />
    </Layout>
  );
}

export default Pagina1;
