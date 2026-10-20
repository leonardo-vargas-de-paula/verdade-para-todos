import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import UnitCard from "../../../components/UnitCard";
import { SearchIcon } from "../../../components/icons";
import useDocumentTitle from "../../../utils/useDocumentTitle";
import { UNIDADES_MODULO1 } from "../../../data/modulos";
import { estaUnidadeCompleta } from "../../../utils/progresso";

function ModuleHome() {
  useDocumentTitle("Módulo 1 — Fake News: Aspectos Básicos");

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulos" backLabel="Voltar aos módulos" />}
        kicker={
          <>
            <SearchIcon />
            Módulo 1
          </>
        }
        title="Fake News: Aspectos Básicos"
        lead={
          <>
            Neste módulo você vai aprender, com calma e passo a passo, o que são
            as notícias falsas e por que elas enganam tanta gente. Nosso foco
            será em Fake News através de textos.
          </>
        }
      />

      <ul className="unit-list">
        {UNIDADES_MODULO1.map((unidade, indice) => {
          const concluida = estaUnidadeCompleta(unidade.paginas);
          /* cadeia: só libera se todas as anteriores estiverem lidas */
          const bloqueada =
            indice > 0 &&
            !UNIDADES_MODULO1.slice(0, indice).every((anterior) =>
              estaUnidadeCompleta(anterior.paginas)
            );
          const primeiraIncompleta = UNIDADES_MODULO1.slice(0, indice).find(
            (anterior) => !estaUnidadeCompleta(anterior.paginas)
          );

          return (
            <UnitCard
              key={unidade.number}
              number={unidade.number}
              title={unidade.title}
              to={unidade.to}
              concluida={concluida}
              bloqueada={bloqueada}
              anteriorTo={primeiraIncompleta?.to}
              anteriorTitulo={primeiraIncompleta?.title}
            />
          );
        })}
      </ul>
    </Layout>
  );
}

export default ModuleHome;
