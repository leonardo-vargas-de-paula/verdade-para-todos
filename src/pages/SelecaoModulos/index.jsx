import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import UnitCard from "../../components/UnitCard";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { MODULO3 } from "../../data/modulos";
import {
  modulo1Completo,
  modulo2Completo,
  modulo3Completo,
} from "../../utils/progresso";

/* Seleção de módulos — entre as boas-vindas e o conteúdo.
   Cada módulo só libera quando o anterior for concluído por completo. */
function SelecaoModulos() {
  useDocumentTitle("Escolha um módulo");
  const modulo1Lido = modulo1Completo();
  const modulo2Lido = modulo2Completo();
  const modulo3Lido = modulo3Completo();

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
          title="Módulo 1 — Fake News: Aspectos Básicos"
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
          anteriorTitulo="Módulo 1 — Fake News: Aspectos Básicos"
        />
        <UnitCard
          number={MODULO3.number}
          title={MODULO3.title}
          to={MODULO3.to}
          tipo="modulo"
          concluida={modulo3Lido}
          bloqueada={!modulo2Lido}
          anteriorTitulo="Módulo 2 — Exercícios"
        />
      </ul>
    </Layout>
  );
}

export default SelecaoModulos;
