import { useLocation } from "react-router-dom";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import UnitNav from "../../../../components/UnitNav";
import IconList from "../../../../components/IconList";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import Callout from "../../../../components/Callout";
import { UNIDADES_MODULO1 } from "../../../../data/modulos";
import {
  estaUnidadeCompleta,
  primeiraPaginaNaoLida,
} from "../../../../utils/progresso";

function Pagina6() {
  useDocumentTitle("Unidade 4 · Página 6 — Leitura lateral");
  const { pathname } = useLocation();
  const unidade = UNIDADES_MODULO1.find((u) => u.to === "/unidade/4");
  const completa = estaUnidadeCompleta(unidade.paginas, pathname);

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/1" backLabel="Voltar ao Módulo 1" />}
        kicker="Módulo 1 · Unidade 4 · Página 6 de 6"
        title="Leitura lateral"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "O que é leitura lateral",
              text: "A leitura lateral é uma técnica de checagem que consiste em abrir novas abas para buscar informações sobre a fonte e o assunto antes de acreditar ou compartilhar uma informação.",
            },
            {
              title: "O que é uma 'aba'",
              text: "Uma aba é uma página aberta no navegador, você pode verificar na porção superior da tela. Ao abrir uma nova aba, você pode pesquisar sobre a fonte e o assunto sem perder a página original. Você pode abrir uma nova aba clicando no botão de mais (+) ao lado da aba atual.",
              content: (
                <img
                  className="card-image"
                  src="/img/imagem-exemplo-aba.svg"
                  alt="Parte superior do navegador com a aba do curso 'Unidade 4' e o botão de mais (+) ao lado"
                />
              ),
            }
          ]}
        />
      </SectionCard>

      <Callout variant="tip" title="Dica">
        Se desejar, você pode usar essa técnica para checar o conteúdo do curso!
      </Callout>

      <UnitNav
        prev={{
          to: "/unidade/4/5",
          label: "◂ Página anterior",
          title: "Verifique as datas",
        }}
        next={{
          to: "/modulos",
          label: "Próximo módulo ▸",
          title: "Escolha um módulo",
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

export default Pagina6;
