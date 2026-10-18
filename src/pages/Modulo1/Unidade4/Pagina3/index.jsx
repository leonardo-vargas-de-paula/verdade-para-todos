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
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/1" backLabel="Voltar ao Módulo 1" />}
        kicker="Módulo 1 · Unidade 4 · Página 3 de 4"
        title="Cuidado com a URL"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "Cuidado com a URL",
              text: (
                <>
                  A URL é o endereço completo de um site, e o domínio é o seu "nome".
                  <br />
                   <br />
                  Como por exemplo o site deste
                  curso possui a seguinte URL:
                  <br /><code className="url-chip">https://verdade-para-todos.vercel.app</code>{" "}
                  <br />
                  <br />
                  E o seu domínio é: 
                  <br /><code className="url-chip">verdade-para-todos.vercel.app</code>
                  <br />
                  <br />
                  Você pode conferir na porção superior da janela do navegador o domínio e a URL de um site. O trecho "https://" aparece após dois cliques na barra de endereço.
                </>
              ),
              content: (
                <>
                  <img
                    className="card-image"
                    src="/img/imagem-exemplo-url.svg"
                    alt="Barra de endereço do navegador mostrando a URL do curso: https://verdade-para-todos.vercel.app"
                  />
                  <p>
                    Sites fraudulentos podem tentar imitar o domínio de sites famosos, mas com pequenas alterações.
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
