import { useLocation } from "react-router-dom";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import IconList from "../../../../components/IconList";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { UNIDADES_MODULO1 } from "../../../../data/modulos";
import {
  estaUnidadeCompleta,
  primeiraPaginaNaoLida,
} from "../../../../utils/progresso";

function Pagina2() {
  useDocumentTitle(
    "Unidade 3 · Página 2 — Aparência de verdade e pressa"
  );
  const { pathname } = useLocation();
  const unidade = UNIDADES_MODULO1.find((u) => u.to === "/unidade/3");
  const completa = estaUnidadeCompleta(unidade.paginas, pathname);

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/1" backLabel="Voltar ao Módulo 1" />}
        kicker="Módulo 1 · Unidade 3 · Página 2 de 2"
        title="Como as Fake News são construídas (parte 2)"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "Falta de fontes",
              text: "Fake News costumam não apresentar fontes. Caso exista alguma, é importante conferir se são confiáveis.",
            },
            {
              title: "Linguagem informal ou excessivamente complicada",
              text: "Podem usar uma linguagem mais acessível de forma inadequada ou termos muito técnicos fora de contexto para confundir.",
            },
          ]}
        />
      </SectionCard>

      <UnitNav
        prev={{
          to: "/unidade/3",
          label: "◂ Página anterior",
          title: "Como as Fake News são construídas",
        }}
        next={{
          to: "/unidade/4",
          label: "Próxima unidade ▸",
          title: "Como conferir antes de acreditar",
          ...(completa
            ? {}
            : {
                bloqueado: true,
                paginaFaltante: primeiraPaginaNaoLida(unidade.paginas, pathname),
              }),
        }}
      />
    </Layout>
  );
}

export default Pagina2;
