import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import UnitCard from "../../components/UnitCard";
import { ChatIcon, ListIcon, SearchIcon } from "../../components/icons";
import useDocumentTitle from "../../utils/useDocumentTitle";

function ModuleHome() {
  useDocumentTitle("Módulo 1 — O que são Fake News");

  return (
    <Layout>
      <Hero
        kicker={
          <>
            <SearchIcon />
            Módulo 1
          </>
        }
        title="O que são as Fake News?"
        lead={
          <>
            Neste módulo você vai aprender, com calma e passo a passo, o que são
            as notícias falsas e por que elas enganam tanta gente. Nosso foco
            será em Fake News através de textos.
          </>
        }
      />

      <ul className="unit-list">
        <UnitCard
          number="1"
          icon={<ChatIcon />}
          title="Unidade 1 — O que é Fake News"
          to="/unidade/1"
        />
        <UnitCard
          number="2"
          icon={<ListIcon />}
          title="Unidade 2 — Os tipos de notícia falsa"
          to="/unidade/2"
        />
        <UnitCard
          number="3"
          icon={<SearchIcon />}
          title="Unidade 3 — Como as Fake News são construídas"
          to="/unidade/3"
        />
      </ul>
    </Layout>
  );
}

export default ModuleHome;
