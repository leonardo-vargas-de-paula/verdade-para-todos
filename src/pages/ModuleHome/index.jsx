import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import UnitCard from "../../components/UnitCard";
import { SearchIcon } from "../../components/icons";
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
          title="Unidade 1 — O que é Fake News"
          to="/unidade/1"
        />
        <UnitCard
          number="2"
          title="Unidade 2 — Os tipos de notícia falsa"
          to="/unidade/2"
        />
        <UnitCard
          number="3"
          title="Unidade 3 — Como as Fake News são construídas"
          to="/unidade/3"
        />
        <UnitCard
          number="4"
          title="Unidade 4 — Como conferir antes de acreditar"
          to="/unidade/4"
        />
      </ul>
    </Layout>
  );
}

export default ModuleHome;
