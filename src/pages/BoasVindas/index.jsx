import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import SectionCard from "../../components/SectionCard";
import useDocumentTitle from "../../utils/useDocumentTitle";
import "./styles.css";

function BoasVindas() {
  useDocumentTitle("Início");

  return (
    <Layout showHeader={false}>
      <Hero
        kicker="Bem-vindo"
        title="Verdade para Todos"
        lead="Um curso online acessível para idosos sobre como identificar e combater Fake News."
      />

      <SectionCard title="Sobre o projeto">
        <p>
          Este site é um Trabalho de Conclusão de Curso (TCC) que visa promover
          o combate à desinformação por meio de um curso online.
        </p>
        <p>
          As aulas estão organizadas em unidades, com modulos de conteúdo teórico e exercícios.
        </p>
        <Link className="btn-start" to="/modulos">
          Começar o curso ▸
        </Link>
      </SectionCard>
    </Layout>
  );
}

export default BoasVindas;
