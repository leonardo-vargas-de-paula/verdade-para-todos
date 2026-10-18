import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import UnitCard from "../../components/UnitCard";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { modulo1Completo, modulo2Completo } from "../../utils/progresso";

/* Seleção de módulos — entre as boas-vindas e o conteúdo.
   O Módulo 2 só libera quando o Módulo 1 for lido por completo. */
function SelecaoModulos() {
  useDocumentTitle("Escolha um módulo");
  const modulo1Lido = modulo1Completo();
  const modulo2Lido = modulo2Completo();

  return (
    <Layout>
      <Hero
        kicker="Início"
        title="Escolha um módulo"
        lead="Vá no seu ritmo, sem pressa. Cada módulo abre quando o anterior estiver terminado."
      />

      <ul className="unit-list">
        <UnitCard
          number="1"
          title="Módulo 1 — O que são as Fake News?"
          to="/modulo/1"
          concluida={modulo1Lido}
        />
        <UnitCard
          number="2"
          title="Módulo 2 — Exercícios"
          to="/modulo/2"
          tipo="modulo"
          concluida={modulo2Lido}
          bloqueada={!modulo1Lido}
          anteriorTo="/modulo/1"
          anteriorTitulo="Módulo 1 — O que são as Fake News?"
        />
      </ul>
    </Layout>
  );
}

export default SelecaoModulos;
