import { useNavigate } from "react-router-dom";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import ExercicioChecklist from "../../../../components/ExercicioChecklist";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { registrarResultado } from "../../../../utils/resultadosExercicios";

/* Exercícios de análise — Módulo 2, Unidade 2, Exercício 4 de 5.
   Formato "checklist": pode haver mais de uma alternativa correta. */
const CHAVE_RESULTADOS = "vpt:modulo2:unidade2";
const EXERCICIO = {
  enunciado:
    "Imagine que você está navegando em uma rede social e encontra a seguinte postagem:",
  postagem: {
    nome: "Maria de Lourdes",
    perfil: "@marialourdes",
    horario: "há 2 horas",
    texto:
      "URGENTE! Acabei de saber por um vizinho que trabalha na prefeitura: a água da torneira está contaminada e não pode ser bebida pelas próximas 72 horas. Ele disse que é melhor correr e comprar água mineral. Espalhem para todos os grupos, é sério!",
    imagemSrc: "/img/imagem-exemplo-fila-agua.webp",
    imagemDescricao:
      "Ilustração de uma fila de pessoas com carrinhos cheios de galões de água mineral em um supermercado.",
    imagemLegenda: "Imagem: fila em um supermercado.",
  },
  alternativas: [
    "Devo desconfiar do tom de urgência e do pedido para espalhar para todos.",
    "Verificar se a prefeitura publicou algum aviso oficial.",
    "Repassar imediatamente, porque a mensagem pede urgência.",
    "Questionar a fonte anônima citada na postagem.",
  ],
  corretas: [0, 1, 3],
  explicacao:
    "O tom de urgência, o pedido para espalhar e a fonte anônima são sinais de alerta. A foto não mostra data, local nem origem, e pode ser de outra situação.",
};

function Pagina5() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercício 4 de 5");
  const navigate = useNavigate();

  const handleProximo = () => {
    navigate("/modulo/2/unidade/2/6");
  };

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/2" backLabel="Voltar ao Módulo 2" />}
        kicker="Módulo 2 · Unidade 2 · Exercício 4 de 5"
        title="Exercícios de análise"
      />

      <ExercicioChecklist
        enunciado={EXERCICIO.enunciado}
        postagem={EXERCICIO.postagem}
        alternativas={EXERCICIO.alternativas}
        corretas={EXERCICIO.corretas}
        explicacao={EXERCICIO.explicacao}
        aoResponder={(resultado) =>
          registrarResultado(CHAVE_RESULTADOS, 3, resultado)
        }
        onVoltar={() => navigate("/modulo/2/unidade/2/4")}
        onProximo={handleProximo}
        ultimo={false}
      />
    </Layout>
  );
}

export default Pagina5;
