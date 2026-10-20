import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import UnitNav from "../../../../components/UnitNav";
import IconList from "../../../../components/IconList";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import Callout from "../../../../components/Callout";

function Pagina5() {
  useDocumentTitle("Unidade 4 · Página 5 — Verifique as datas");

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/1" backLabel="Voltar ao Módulo 1" />}
        kicker="Módulo 1 · Unidade 4 · Página 5 de 6"
        title="Verifique as datas"
      />

      <SectionCard>
        <IconList
          items={[
            {
              title: "Verifique as datas",
              text: (
                <>
                  Confira quando a informação foi publicada e se há uma data de
                  atualização. Verificar as datas é importante para saber se a
                  informação está atualizada, o que pode ser crucial dependendo
                  do contexto em que ela é passada: uma notícia verdadeira em
                  uma época pode não refletir a situação atual.
                </>
              ),
            },
          ]}
        />
      </SectionCard>

      <Callout variant="tip" title="Dica">
        Antes de acreditar ou compartilhar, pergunte-se: essa informação ainda é
        válida hoje?
      </Callout>

      <UnitNav
        prev={{
          to: "/unidade/4/4",
          label: "◂ Página anterior",
          title: "Pesquise em agências de checagem",
        }}
        next={{
          to: "/unidade/4/6",
          label: "Próxima página ▸",
          title: "Leitura lateral",
        }}
      />
    </Layout>
  );
}

export default Pagina5;
