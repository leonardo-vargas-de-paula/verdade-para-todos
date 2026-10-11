import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import SectionCard from "../../../components/SectionCard";
import IconList from "../../../components/IconList";
import UnitNav from "../../../components/UnitNav";
import useDocumentTitle from "../../../utils/useDocumentTitle";

function Pagina1() {
  useDocumentTitle("Unidade 4 — Como conferir antes de acreditar");

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/"
          backLabel="Voltar ao Módulo 1"
          trail={["Início", "Módulo 1", "Unidade 4", "Página 1"]}
        />
      }
    >
      <Hero
        kicker="Unidade 4 · Página 1 de 3"
        title="Como conferir antes de acreditar"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "Investigue a fonte e o autor",
              text: "Sempre busque a autoria de um texto. E se possível pesquise sobre o autor e a fonte da informação.",
            },
            {
              title: "Identifique o gênero textual",
              text: "É importante verificar se a informação passada é uma notícia, sátira ou uma opnião. Cada gênero textual tem uma função diferente e deve ser interpretado de acordo com o contexto.",
            },
          ]}
        />
      </SectionCard>

      <UnitNav
        prev={{
          to: "/unidade/3/2",
          label: "◂ Unidade anterior",
          title: "Como as Fake News são construídas",
        }}
        next={{
          to: "/unidade/4/2",
          label: "Próxima página ▸",
          title: "Continuação",
        }}
      />
    </Layout>
  );
}

export default Pagina1;
