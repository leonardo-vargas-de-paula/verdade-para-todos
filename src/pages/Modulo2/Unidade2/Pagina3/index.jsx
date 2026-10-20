import { useNavigate } from "react-router-dom";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import ExercicioChecklist from "../../../../components/ExercicioChecklist";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { registrarResultado } from "../../../../utils/resultadosExercicios";

/* Exercícios de análise — Módulo 2, Unidade 2, Exercício 2 de 4.
   Formato "checklist": pode haver mais de uma alternativa correta. */
const CHAVE_RESULTADOS = "vpt:modulo2:unidade2";
const EXERCICIO = {
  enunciado:
    "Imagine que você está navegando na internet e encontra a seguinte publicação:",
  noticia: {
    url: "piadas.org",
    titulo:
      'Desnotícia: Anvisa libera detergente para "limpeza intestinal", afirma Dr. Irineu',
    texto:
      'Após o recolhimento de um lote defeituoso, uma suposta nova nota da Anvisa confirmou que a fórmula atual do detergente Limpê atingiu um nível de pureza tão alto que se tornou segura para o consumo humano. A recomendação inusitada foi endossada pelo renomado infectologista Dr. Irineu Você Não Sabe nem Eu, que atestou a segurança do produto para a regulação da flora intestinal dos brasileiros.',
  },
  alternativas: [
    "O texto aparenta ser uma sátira e não uma notícia real.",
    "Confira nos canais oficiais da Anvisa e da marca se essa informação existe.",
    "Compartilhar como se fosse uma notícia verdadeira, porque parece engraçado.",
    "Acreditar, porque o texto cita um médico e o nome da marca.",
  ],
  corretas: [0, 1],
  explicacao:
    "O título começa com \"Desnotícia\" e o nome do médico parece uma piada, sinais de que o texto é uma sátira. Além disso, o nome do site é piadas.org, que é um forte indicativo de que não se trata de uma notícia real.",
};

function Pagina3() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercício 2 de 4");
  const navigate = useNavigate();

  const handleProximo = () => {
    navigate("/modulo/2/unidade/2/4");
  };

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/2" backLabel="Voltar ao Módulo 2" />}
        kicker="Módulo 2 · Unidade 2 · Exercício 2 de 4"
        title="Exercícios de análise"
      />

      <ExercicioChecklist
        enunciado={EXERCICIO.enunciado}
        noticia={EXERCICIO.noticia}
        alternativas={EXERCICIO.alternativas}
        corretas={EXERCICIO.corretas}
        explicacao={EXERCICIO.explicacao}
        aoResponder={(resultado) =>
          registrarResultado(CHAVE_RESULTADOS, 1, resultado)
        }
        onProximo={handleProximo}
        ultimo={false}
      />
    </Layout>
  );
}

export default Pagina3;
