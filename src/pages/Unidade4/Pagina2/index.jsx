import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import SectionCard from "../../../components/SectionCard";
import IconList from "../../../components/IconList";
import UnitNav from "../../../components/UnitNav";
import useDocumentTitle from "../../../utils/useDocumentTitle";

function Pagina2() {
  useDocumentTitle("Unidade 4 · Página 2 — Identifique o gênero textual");

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/modulo/1"
          backLabel="Voltar ao Módulo 1"
          trail={["Início", "Módulo 1", "Unidade 4", "Página 2"]}
        />
      }
    >
      <Hero
        kicker="Unidade 4 · Página 2 de 4"
        title="Identifique o gênero textual"
      />

      <SectionCard title="Nem todo texto é uma notícia">
        <p>
          Antes de acreditar, veja que tipo de texto você está lendo. Cada gênero
          tem uma função diferente e deve ser interpretado de acordo com o
          contexto:
        </p>
        <IconList
          items={[
            {
              title: "Notícia",
              text: "Relata um fato de forma objetiva. Deve informar quem, o quê, quando, onde e por quê.",
            },
            {
              title: "Sátira",
              text: "Usa humor e exagero para criticar. Não deve ser levada ao pé da letra — muitas mensagens falsas se disfarçam de sátira.",
            },
            {
              title: "Opinião",
              text: "Expressa o ponto de vista de quem escreve. É diferente de um fato e costuma aparecer em artigos e comentários.",
            },
          ]}
        />
      </SectionCard>

      <UnitNav
        prev={{
          to: "/unidade/4",
          label: "◂ Página anterior",
          title: "Investigue a fonte e o autor",
        }}
        next={{
          to: "/unidade/4/3",
          label: "Próxima página ▸",
          title: "Cuidado com a URL",
        }}
      />
    </Layout>
  );
}

export default Pagina2;
