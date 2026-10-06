import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import SectionCard from "../../../components/SectionCard";
import IconList from "../../../components/IconList";
import UnitNav from "../../../components/UnitNav";
import useDocumentTitle from "../../../utils/useDocumentTitle";

function Pagina2() {
  useDocumentTitle(
    "Unidade 3 · Página 2 — Aparência de verdade e pressa"
  );

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/"
          backLabel="Voltar ao Módulo 1"
          trail={["Início", "Módulo 1", "Unidade 3", "Página 2"]}
        />
      }
    >
      <Hero
        kicker="Unidade 3 · Página 2 de 2"
        title="Como as Fake News são construídas (parte 2)"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "Falta de fontes",
              text: "Fake News costumam não apresentar fontes. Caso exista alguma, é importante conferir se são confiáveis.",
            },
            {
              title: "Linguagem informal ou excessivamente complicada",
              text: "Podem usar uma linguagem mais acessível de forma inadequada ou termos muito técnicos fora de contexto para confundir.",
            },
          ]}
        />
      </SectionCard>

      <UnitNav
        prev={{
          to: "/unidade/3",
          label: "◂ Página anterior",
          title: "Como as Fake News são construídas",
        }}
        next={{
          to: "/unidade/4",
          label: "Próxima unidade ▸",
          title: "Como conferir antes de acreditar",
        }}
      />
    </Layout>
  );
}

export default Pagina2;
