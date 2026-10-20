import { useEffect, useState } from "react";
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

/* Exercícios de análise — Módulo 2, Unidade 2, Exercício 4 de 4.
   A unidade é concluída ao finalizar este último exercício. */
const ROTA_UNIDADE = "/modulo/2/unidade/2";
const CHAVE_RESULTADOS = "vpt:modulo2:unidade2";
const TOTAL_EXERCICIOS = 4;
const EXERCICIO = {
  enunciado:
    "Imagine que você está navegando em uma rede social e encontra a seguinte postagem:",
  postagem: {
    nome: "Maria de Lourdes",
    horario: "há 2 horas",
    texto:
      "URGENTE! Acabei de saber por um vizinho que trabalha na prefeitura: a água da torneira está contaminada e não pode ser bebida pelas próximas 72 horas. Ele disse que é melhor correr e comprar água mineral. Espalhem para todos os grupos, é sério!",
    imagemSrc: "/img/imagem-exemplo-fila-agua.webp",
    imagemDescricao:
      "Ilustração de uma fila de pessoas com carrinhos cheios de galões de água mineral em um supermercado.",
    imagemLegenda: "Imagem: fila em um supermercado.",
  },
  alternativas: [
    "Desconfiar do tom de urgência e do pedido para espalhar para todos.",
    "Verificar se a prefeitura publicou algum aviso oficial.",
    "Repassar imediatamente, porque a mensagem pede urgência.",
    "Questionar a fonte anônima citada na postagem.",
  ],
  corretas: [0, 1, 3],
  explicacao:
    "O tom de urgência, o pedido para espalhar e a fonte anônima são sinais de alerta. A foto não mostra data, local nem origem, e pode ser de outra situação.",
};

function Pagina5() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercício 4 de 4");

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
            : "Módulo 2 · Unidade 2 · Exercício 4 de 4"
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
              to: "/modulo/2/unidade/2/4",
              label: "◂ Exercício anterior",
              title: "Exercício 3",
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
            registrarResultado(CHAVE_RESULTADOS, 3, resultado)
          }
          onProximo={() => setFinalizado(true)}
          ultimo
        />
      )}
    </Layout>
  );
}

export default Pagina5;
