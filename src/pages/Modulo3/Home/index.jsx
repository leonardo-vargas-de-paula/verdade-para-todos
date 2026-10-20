import Layout from "../../../components/Layout";
import BackBar from "../../../components/BackBar";
import Hero from "../../../components/Hero";
import SectionCard from "../../../components/SectionCard";
import IconList from "../../../components/IconList";
import Callout from "../../../components/Callout";
import UnitNav from "../../../components/UnitNav";
import { ScrollIcon } from "../../../components/icons";
import useDocumentTitle from "../../../utils/useDocumentTitle";

/* Módulo 3 — Considerações Finais: página única de encerramento do curso. */
function Modulo3Home() {
  useDocumentTitle("Módulo 3 — Considerações Finais");

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulos" backLabel="Voltar aos módulos" />}
        kicker={
          <>
            <ScrollIcon />
            Módulo 3
          </>
        }
        title="Considerações Finais"
        lead="Chegamos ao fim do curso. Neste último momento, vamos relembrar o que aprendemos e reforçar os cuidados que ajudam a reconhecer e a não compartilhar informações falsas."
      />

      <SectionCard title="Resumo do curso">
        <IconList
          items={[
            {
              title: "Fake News e desinformação",
              text: "São informações falsas feitas para enganar. Nem todo erro é espalhado de propósito, mas todos podem causar prejuízos.",
            },
            {
              title: "Sinais de alerta",
              text: "Desconfie de urgência, apelo emocional, falta de autor ou de fonte, linguagem confusa e promessas exageradas.",
            },
            {
              title: "Como conferir",
              text: "Veja se o texto é notícia, sátira ou opinião. Confira autor, fonte, data e endereço do site. Pesquise em outros veículos e agências de checagem.",
            },
            {
              title: "Antes de compartilhar",
              text: "Leia a notícia inteira, não confie na pressa e, na dúvida, não compartilhe.",
            },
          ]}
        />
      </SectionCard>

      <Callout variant="tip" title="Lembre-se">
        Verificar uma informação antes de compartilhar é um gesto de respeito com
        as outras pessoas. Você não precisa saber tudo: basta ter o hábito de
        conferir.
      </Callout>

      <SectionCard title="Obrigado por chegar até aqui">
        <p>
          Combater a desinformação é uma tarefa de todos. Ao aprender a
          reconhecer notícias falsas e a checar antes de compartilhar, você
          ajuda a proteger sua família, seus amigos e toda a comunidade.
        </p>
        <p>
          Continue praticando no seu dia a dia. Sempre que quiser, volte ao
          curso para revisar o conteúdo e refazer os exercícios. Aprender é um
          caminho que continua.
        </p>
      </SectionCard>

      <UnitNav
        prev={{
          to: "/modulo/2",
          label: "◂ Módulo anterior",
          title: "Exercícios",
        }}
        next={{
          to: "/modulos",
          label: "Voltar ao início ▸",
          title: "Escolha um módulo",
        }}
      />
    </Layout>
  );
}

export default Modulo3Home;
