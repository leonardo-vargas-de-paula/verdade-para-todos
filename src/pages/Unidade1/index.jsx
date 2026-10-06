import Layout from "../../components/Layout";
import BackBar from "../../components/BackBar";
import Hero from "../../components/Hero";
import SectionCard from "../../components/SectionCard";
import IconList from "../../components/IconList";
import UnitNav from "../../components/UnitNav";
import useDocumentTitle from "../../utils/useDocumentTitle";

function Unidade1() {
  useDocumentTitle("Unidade 1 — O que é Fake News");

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/"
          backLabel="Voltar ao Módulo 1"
          trail={["Início", "Módulo 1", "Unidade 1"]}
        />
      }
    >
      <Hero kicker="Unidade 1 · Página 1 de 1" title="O que é Fake News?" />

      <SectionCard title="Definição">
        <p>
          <strong>Fake news </strong>é uma expressão em inglês que quer dizer{" "}
          <strong>"notícia falsa"</strong> . É uma informação inventada ou
          deturpada, criada para parecer uma informação verdadeira.
        </p>
        <p>
          Pesquisadores da área apontam que o termo mais adequado seria{" "}
          <strong>desinformação</strong>, mas o termo{" "}
          <strong>fake news</strong> se popularizou e é o mais utilizado.
        </p>
      </SectionCard>

      <SectionCard title="Por que as fake news existem">
        <IconList
          items={[
            {
              title: "Ganhar dinheiro",
              text: "Manchetes chamativas atraem muitos cliques, podendo gerar lucro para quem publicou. Além disso, golpes são realizados através de informaçẽos falsas.",
            },
            {
              title: "Influenciar a opinião das pessoas",
              text: "Algumas notícias falsas são feitas para defender um político, um partido ou uma ideia. Do mesmo modo, podem ser usadas para a difamação e redução da confiança em instituições ou pessoas.",
            },
            {
              title: "Causar confusão ou desestabilização social",
              text: "Um boato pode ser construido para gerar revolta e promover a polarização social",
            },
          ]}
        />
      </SectionCard>

      <UnitNav
        prev={{ to: "/", label: "◂ Voltar", title: "Módulo 1" }}
        next={{
          to: "/unidade/2",
          label: "Próxima unidade ▸",
          title: "Os tipos de notícia falsa",
        }}
      />
    </Layout>
  );
}

export default Unidade1;
