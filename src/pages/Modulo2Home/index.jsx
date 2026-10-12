import Layout from "../../components/Layout";
import BackBar from "../../components/BackBar";
import Hero from "../../components/Hero";
import UnitCard from "../../components/UnitCard";
import { SearchIcon } from "../../components/icons";
import useDocumentTitle from "../../utils/useDocumentTitle";

function Modulo2Home() {
  useDocumentTitle("Módulo 2 — Exercícios");

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/modulos"
          backLabel="Voltar aos módulos"
          trail={["Início", "Módulo 2"]}
        />
      }
    >
      <Hero
        kicker={
          <>
            <SearchIcon />
            Módulo 2
          </>
        }
        title="Exercícios"
        lead="Neste módulo você vai praticar o que aprendeu no Módulo 1. Responda com calma, sem pressa — uma pergunta de cada vez."
      />

      <ul className="unit-list">
        <UnitCard
          number="1"
          title="Unidade 1 — Exercícios de fixação"
          to="/modulo/2/unidade/1"
        />
      </ul>
    </Layout>
  );
}

export default Modulo2Home;
