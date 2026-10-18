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

function Pagina4() {
  useDocumentTitle(
    "Unidade 4 · Página 4 — Pesquise em agências de checagem"
  );
  const { pathname } = useLocation();
  const unidade = UNIDADES_MODULO1.find((u) => u.to === "/unidade/4");
  const completa = estaUnidadeCompleta(unidade.paginas, pathname);

  return (
    <Layout
      backBar={
        <BackBar
          backTo="/modulo/1"
          backLabel="Voltar ao Módulo 1"
        />
      }
    >
      <Hero
        kicker="Módulo 1 · Unidade 4 · Página 4 de 4"
        title="Pesquise em agências de checagem"
      />

      <SectionCard>
<IconList
          items={[
            {
              title: "Pesquise em agências de checagem",
              text: (
                <>
                  Agências de checagem de fatos são organizações que verificam a
                  veracidade de informações e notícias. Elas podem ser uma
                  fonte confiável ajudar a confirmar se uma informação é
                  verdadeira ou falsa.
                  <br />
                  Exemplos:
                </>
              ),
              content: (
                <ul className="examples-list">
                  <li>
                    Fato ou Fake —{" "}
                    <a
                      href="https://g1.globo.com/fato-ou-fake/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      g1.globo.com/fato-ou-fake
                    </a>
                  </li>
                  <li>
                    Agência Lupa —{" "}
                    <a
                      href="https://www.agencialupa.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      agencialupa.org
                    </a>
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </SectionCard>

      <Callout variant="danger" title="Cuidados">
        Antes de confiar cegamente em uma agência de checagem, pesquise sobre a reputação dela. Nem todas as agências de checagem são confiáveis, e algumas podem ter viés político ou interesses próprios. Sempre busque informações de múltiplas fontes confiáveis antes de formar uma opinião.
      </Callout>

      <UnitNav
        prev={{
          to: "/unidade/4/3",
          label: "◂ Página anterior",
          title: "Cuidado com a URL",
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

export default Pagina4;
