import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import IconList from "../../../../components/IconList";

function Pagina3() {
  useDocumentTitle(
    "Unidade 4 · Página 3 — Cuidado com a URL"
  );

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/modulo/1"
          backLabel="Voltar ao Módulo 1"
          trail={["Início", "Módulo 1", "Unidade 4", "Página 3"]}
        />
      }
    >
      <Hero
        kicker="Unidade 4 · Página 3 de 4"
        title="Cuidado com a URL"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "Cuidado com a URL",
              text: (
                <>
                  A URL é o endereço de um site. Como por exemplo o site deste
                  curso utiliza<br /> 
                  <code className="url-chip">verdade-para-todos.vercel.app</code>
                  {" "}
                   e você pode conferir na porção superior da janela do navegador.
                </>
              ),
              content: (
                <>
                  <img
                    className="card-image"
                    src="/img/exemplo-url.svg"
                    alt="Barra de endereço do navegador mostrando a URL do curso: https://verdade-para-todos.vercel.app"
                  />
                  <p>
                    Sites fraudulentos podem tentar imitar a URL de sites famosos, mas com pequenas alterações.
                  </p>
                </>
              ),
            },
          ]}
        />
      </SectionCard>

      <UnitNav
        prev={{
          to: "/unidade/4/2",
          label: "◂ Página anterior",
          title: "Identifique o gênero textual",
        }}
        next={{
          to: "/unidade/4/4",
          label: "Próxima página ▸",
          title: "Pesquise em agências de checagem",
        }}
      />
    </Layout>
  );
}

export default Pagina3;
