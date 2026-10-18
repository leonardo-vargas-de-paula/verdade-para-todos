import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import UnitCard from "../../../components/UnitCard";
import { SearchIcon } from "../../../components/icons";
import useDocumentTitle from "../../../utils/useDocumentTitle";
import { UNIDADES_MODULO2 } from "../../../data/modulos";
import { unidadeConcluida } from "../../../utils/progresso";

function Modulo2Home() {
  useDocumentTitle("Módulo 2 — Exercícios");

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/modulos"
          backLabel="Voltar aos módulos"
          trail={["Início", "Módulo 2"]}
        />
      }
    >
      <Hero
        kicker={
          <>
            <SearchIcon />
            Módulo 2
          </>
        }
        title="Exercícios"
        lead="Neste módulo você vai praticar o que aprendeu no Módulo 1. Responda com calma, sem pressa — uma pergunta de cada vez."
      />

      <ul className="unit-list">
        {UNIDADES_MODULO2.map((unidade, indice) => {
          const concluida = unidadeConcluida(unidade.to);
          /* cadeia: só libera se todas as unidades anteriores terminadas */
          const bloqueada =
            indice > 0 &&
            !UNIDADES_MODULO2.slice(0, indice).every((anterior) =>
              unidadeConcluida(anterior.to)
            );
          const primeiraIncompleta = UNIDADES_MODULO2.slice(0, indice).find(
            (anterior) => !unidadeConcluida(anterior.to)
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

export default Modulo2Home;
