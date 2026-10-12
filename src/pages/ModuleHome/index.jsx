import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import UnitCard from "../../components/UnitCard";
import { SearchIcon } from "../../components/icons";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { lerVisitados } from "../../utils/progresso";

/* Páginas de cada unidade — uma unidade só é "concluída"
   quando o usuário visitou todas elas. */
const UNIDADES_MODULO1 = [
  {
    number: "1",
    title: "Unidade 1 — O que é Fake News",
    to: "/unidade/1",
    paginas: ["/unidade/1"],
  },
  {
    number: "2",
    title: "Unidade 2 — Os tipos de notícia falsa",
    to: "/unidade/2",
    paginas: ["/unidade/2"],
  },
  {
    number: "3",
    title: "Unidade 3 — Como as Fake News são construídas",
    to: "/unidade/3",
    paginas: ["/unidade/3", "/unidade/3/2"],
  },
  {
    number: "4",
    title: "Unidade 4 — Como conferir antes de acreditar",
    to: "/unidade/4",
    paginas: ["/unidade/4", "/unidade/4/2", "/unidade/4/3"],
  },
];

function ModuleHome() {
  useDocumentTitle("Módulo 1 — O que são Fake News");

  const visitados = lerVisitados();

  return (
    <Layout>
      <Hero
        kicker={
          <>
            <SearchIcon />
            Módulo 1
          </>
        }
        title="O que são as Fake News?"
        lead={
          <>
            Neste módulo você vai aprender, com calma e passo a passo, o que são
            as notícias falsas e por que elas enganam tanta gente. Nosso foco
            será em Fake News através de textos.
          </>
        }
      />

      <ul className="unit-list">
        {UNIDADES_MODULO1.map((unidade) => (
          <UnitCard
            key={unidade.number}
            number={unidade.number}
            title={unidade.title}
            to={unidade.to}
            concluida={unidade.paginas.every((pagina) =>
              visitados.includes(pagina)
            )}
          />
        ))}
      </ul>
    </Layout>
  );
}

export default ModuleHome;
