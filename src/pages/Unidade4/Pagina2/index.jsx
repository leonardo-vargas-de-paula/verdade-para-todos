import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import SectionCard from "../../../components/SectionCard";
import UnitNav from "../../../components/UnitNav";
import useDocumentTitle from "../../../utils/useDocumentTitle";
import IconList from "../../../components/IconList";

function Pagina2() {
  useDocumentTitle(
    "Unidade 4 · Página 2 — Como conferir antes de acreditar"
  );

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
        kicker="Unidade 4 · Página 2 de 3"
        title="Como conferir antes de acreditar (parte 2)"
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
          to: "/unidade/4",
          label: "◂ Página anterior",
          title: "Como conferir antes de acreditar",
        }}
        next={{
          to: "/unidade/4/3",
          label: "Próxima página ▸",
          title: "Continuação",
        }}
      />
    </Layout>
  );
}

export default Pagina2;
