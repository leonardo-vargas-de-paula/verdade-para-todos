import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import SectionCard from "../../../../components/SectionCard";
import ExercicioChecklist from "../../../../components/ExercicioChecklist";
import UnitNav from "../../../../components/UnitNav";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { marcarUnidadeConcluida } from "../../../../utils/progresso";
import {
  lerResultados,
  registrarResultado,
} from "../../../../utils/resultadosExercicios";

/* Exercícios de análise — Módulo 2, Unidade 2, Exercício 5 de 5.
   A unidade é concluída ao finalizar este último exercício. */
const ROTA_UNIDADE = "/modulo/2/unidade/2";
const CHAVE_RESULTADOS = "vpt:modulo2:unidade2";
const TOTAL_EXERCICIOS = 5;
const EXERCICIO = {
  enunciado:
    "Imagine que você está navegando em uma rede social e encontra a seguinte postagem:",
  postagem: {
    nome: "Segurança em Foco",
    perfil: "@segurancaemfoco · Mato Grosso do Sul",
    horario: "há 1 hora",
    texto:
      "Segundo especialista em segurança Dr. Carlos Silva, da Universidade Federal de Mato Grosso do Oeste, anotar a senha do banco em um papel e guardar na carteira junto com o cartão é um dos maiores erros da atualidade. Se você perder a bolsa, o criminoso terá o cartão e a chave para esvaziar sua conta em minutos.\n\nSaiba mais sobre em sua publicação no portal de notícias universitário: www.portal.ficticio.com",
  },
  alternativas: [
    "Ainda que um especialista e uma universidade foram mencionados, não podemos acreditar em tudo cegamente a primeira vista.",
    "É uma boa prática usar a leitura lateral para analisar a confiabilidade do autor e da instituição citada antes de compartilhar a informação.",
    "Citar o autor facilita a descoberta de suas qualificações e credenciais para um assunto.",
    "Buscar informações sobre o endereço www.portal.ficticio.com pode me ajudar a confirmar se o portal citado é competente.",
  ],
  corretas: [0, 1, 2, 3],
  explicacao:
    "Mesmo quando a postagem cita um especialista e uma universidade, não se deve acreditar de imediato. Citar o autor facilita a checagem de suas qualificações para falar sobre um assunto. A leitura lateral é a sua aliada para analisar todos esses pontos!",
};

function Pagina6() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercício 5 de 5");
  const navigate = useNavigate();

  const [finalizado, setFinalizado] = useState(false);
  const exatos = finalizado
    ? lerResultados(CHAVE_RESULTADOS).filter((resultado) => resultado?.exato)
        .length
    : 0;

  /* Terminou os exercícios → grava a unidade como concluída (trava de avanço). */
  useEffect(() => {
    if (finalizado) marcarUnidadeConcluida(ROTA_UNIDADE);
  }, [finalizado]);

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/2" backLabel="Voltar ao Módulo 2" />}
        kicker={
          finalizado
            ? "Módulo 2 · Unidade 2 · Concluído"
            : "Módulo 2 · Unidade 2 · Exercício 5 de 5"
        }
        title="Exercícios de análise"
      />

      {finalizado ? (
        <>
          <SectionCard title="Exercícios concluídos!">
            <p>Você terminou os exercícios desta unidade.</p>
            <p>
              Você acertou por completo <strong>{exatos}</strong> de{" "}
              <strong>{TOTAL_EXERCICIOS}</strong> exercícios.
            </p>
            <p>
              Lembre-se: nestes exercícios pode haver mais de uma alternativa
              correta, e o importante é reconhecer todos os sinais de alerta.
              Sempre que quiser, revise o conteúdo no Módulo 1 e volte para
              praticar novamente.
            </p>
          </SectionCard>
          <UnitNav
            prev={{
              to: "/modulo/2/unidade/2/5",
              label: "◂ Exercício anterior",
              title: "Exercício 4",
            }}
            next={{
              to: "/modulos",
              label: "Voltar ao seletor ▸",
              title: "Escolha um módulo",
            }}
          />
        </>
      ) : (
        <ExercicioChecklist
          enunciado={EXERCICIO.enunciado}
          postagem={EXERCICIO.postagem}
          alternativas={EXERCICIO.alternativas}
          corretas={EXERCICIO.corretas}
          explicacao={EXERCICIO.explicacao}
          aoResponder={(resultado) =>
            registrarResultado(CHAVE_RESULTADOS, 4, resultado)
          }
          onVoltar={() => navigate("/modulo/2/unidade/2/5")}
          onProximo={() => setFinalizado(true)}
          ultimo
        />
      )}
    </Layout>
  );
}

export default Pagina6;
