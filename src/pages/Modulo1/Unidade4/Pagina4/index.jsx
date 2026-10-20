import { useState } from "react";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import UnitNav from "../../../../components/UnitNav";
import IconList from "../../../../components/IconList";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import Callout from "../../../../components/Callout";
import ConfirmDialog from "../../../../components/ConfirmDialog";

function Pagina4() {
  useDocumentTitle(
    "Unidade 4 · Página 4 — Pesquise em agências de checagem"
  );

  /* Link externo aguardando confirmação — abre o diálogo antes de
     levar o usuário para outra aba do navegador. */
  const [linkPendente, setLinkPendente] = useState(null);

  const handleLinkClick = (event, href, site) => {
    event.preventDefault();
    setLinkPendente({ href, site });
  };

  const handleConfirmarAbertura = () => {
    if (linkPendente) {
      window.open(linkPendente.href, "_blank", "noopener,noreferrer");
    }
    setLinkPendente(null);
  };

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/1" backLabel="Voltar ao Módulo 1" />}
        kicker="Módulo 1 · Unidade 4 · Página 4 de 5"
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
                      onClick={(event) =>
                        handleLinkClick(
                          event,
                          "https://g1.globo.com/fato-ou-fake/",
                          "g1.globo.com/fato-ou-fake"
                        )
                      }
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
                      onClick={(event) =>
                        handleLinkClick(
                          event,
                          "https://www.agencialupa.org/",
                          "agencialupa.org"
                        )
                      }
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
          to: "/unidade/4/5",
          label: "Próxima página ▸",
          title: "Leitura lateral",
        }}
      />

      <ConfirmDialog
        open={linkPendente !== null}
        title="Abrir site externo?"
        message={
          linkPendente
            ? `Você vai abrir o site ${linkPendente.site} em outra aba do navegador. Deseja continuar?`
            : ""
        }
        confirmLabel="Abrir em outra aba"
        cancelLabel="Cancelar"
        onConfirm={handleConfirmarAbertura}
        onCancel={() => setLinkPendente(null)}
      />
    </Layout>
  );
}

export default Pagina4;
