import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import IconList from "../../../../components/IconList";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";

function Pagina1() {
  useDocumentTitle("Unidade 4 — Como conferir antes de acreditar");

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/modulo/1"
          backLabel="Voltar ao Módulo 1"
          trail={["Início", "Módulo 1", "Unidade 4", "Página 1"]}
        />
      }
    >
      <Hero
        kicker="Unidade 4 · Página 1 de 4"
        title="Como conferir antes de acreditar"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "Investigue a fonte e o autor",
              text: "Sempre busque a autoria de um texto. Procure o nome de quem escreveu e o veículo onde a informação foi publicada. Se possível, pesquise sobre o autor e a fonte antes de confiar.",
              content: (
                <>
                  <img
                    className="card-image"
                    src="/img/imagem-exemplo-autor.svg"
                    alt="Recorte de notícia com a linha de crédito destacando o autor (Maria Silva), o veículo (Jornal Exemplo) e a data de publicação"
                  />
                  <p>
                    Desconfie quando não há autor nem veículo identificados:
                    informações sérias costumam dizer quem escreveu e de onde vieram.
                  </p>
                </>
              ),
            },
          ]}
        />
      </SectionCard>

      <UnitNav
        prev={{
          to: "/unidade/3/2",
          label: "◂ Unidade anterior",
          title: "Como as Fake News são construídas",
        }}
        next={{
          to: "/unidade/4/2",
          label: "Próxima página ▸",
          title: "Identifique o gênero textual",
        }}
      />
    </Layout>
  );
}

export default Pagina1;
