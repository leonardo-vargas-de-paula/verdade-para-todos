import { useLocation } from "react-router-dom";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import IconList from "../../../../components/IconList";
import Callout from "../../../../components/Callout";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { UNIDADES_MODULO1 } from "../../../../data/modulos";
import {
  estaUnidadeCompleta,
  primeiraPaginaNaoLida,
} from "../../../../utils/progresso";

function Pagina1() {
  useDocumentTitle("Unidade 2 — Os tipos de informação falsa");
  const { pathname } = useLocation();
  const unidade = UNIDADES_MODULO1.find((u) => u.to === "/unidade/2");
  const completa = estaUnidadeCompleta(unidade.paginas, pathname);

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/1" backLabel="Voltar ao Módulo 1" />}
        kicker="Módulo 1 · Unidade 2 · Página 1 de 1"
        title="Os tipos de informação falsa"
      />

      <SectionCard title="Nem toda informação errada é igual">
        <p>É útil conhecer as formas mais comuns que uma notícia falsa pode assumir. Baseado nisso existe o modelo da "Desordem Informacional", que separa 
           os conteúdos baseado na veracidade e na intencionalidade de enganar:</p>
        <IconList
          items={[
            {
              title: "Desinformação",
              text: "Uma informação falsa divulgada com o intuito de enganar.",
            },
            {
              title: "Informação incorreta",
              text: "Informação que está errada, mas que foi divulgada sem a intenção de enganar.",
            },
            {
              title: "Má-informação",
              text: "Uma informação que é verdadeira, mas que foi divulgada de forma indevida para causar danos.",
            },
          ]}
        />
      </SectionCard>

      <Callout variant="danger" title="Por que isso importa para você">
        Nem toda informação errada compartilhada é uma tentativa de enganar, mas todas podem levar a
        decisões danosas.
      </Callout>

      <UnitNav
        prev={{
          to: "/unidade/1",
          label: "◂ Unidade anterior",
          title: "O que é Fake News",
        }}
        next={{
          to: "/unidade/3",
          label: "Próxima unidade ▸",
          title: "Características comuns das Fake News",
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

export default Pagina1;
