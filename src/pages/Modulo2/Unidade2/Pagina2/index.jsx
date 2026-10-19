import { useNavigate } from "react-router-dom";
import Layout from "../../../../components/Layout";
import BackBar from "../../../../components/BackBar";
import Hero from "../../../../components/Hero";
import ExercicioChecklist from "../../../../components/ExercicioChecklist";
import useDocumentTitle from "../../../../utils/useDocumentTitle";
import { registrarResultado } from "../../../../utils/resultadosExercicios";

/* Exercícios de análise — Módulo 2, Unidade 2, Exercício 1 de 2.
   Formato "checklist": pode haver mais de uma alternativa correta. */
const CHAVE_RESULTADOS = "vpt:modulo2:unidade2";
const EXERCICIO = {
  enunciado:
    "Imagine que você quer entrar no site www.gov.br para ver as notícias do governo federal e encontra o seguinte cenário:",
  noticia: {
    url: "www.govi.rb",
    titulo:
      'INSS aprova "Aposentadoria por Cansaço Crônico" e libera R$ 10.000 no PIX hoje mesmo!',
    texto:
      'Uma nova medida provisória acaba de mudar a história dos trabalhadores brasileiros. O Governo Federal sancionou nesta manhã a "Lei da Preguiça Justificada" (Lei nº 171.171), que garante aposentadoria vitalícia e imediata para qualquer cidadão que acorde sem vontade de ir trabalhar. O decreto foi assinado pelo recém-nomeado Ministro da Previdência, o ex-jogador Ronaldinho Gaúcho, durante um churrasco oficial de Brasília.',
  },
  alternativas: [
    "Desconfie do tom alarmista e da promessa de dinheiro fácil.",
    "Confira em outros veículos confiáveis e no site oficial do INSS se a lei e o ministro realmente existem.",
    "Compartilhar com a família antes que o benefício acabe.",
    "O endereço www.govi.rb imita o www.gov.br, mas não é o site oficial do governo.",
  ],
  corretas: [0, 1, 3],
  explicacao:
    "O endereço www.govi.rb imita o www.gov.br, mas não é o site oficial do governo. Além disso, o texto usa tom alarmista, promete dinheiro fácil e não apresenta fonte confiável. Antes de acreditar ou compartilhar, confira a informação em outros veículos e nos canais oficiais do INSS.",
};

function Pagina2() {
  useDocumentTitle("Módulo 2 · Unidade 2 — Exercício 1 de 2");
  const navigate = useNavigate();

  const handleProximo = () => {
    navigate("/modulo/2/unidade/2/3");
  };

  return (
    <Layout>
      <Hero
        back={<BackBar backTo="/modulo/2" backLabel="Voltar ao Módulo 2" />}
        kicker="Módulo 2 · Unidade 2 · Exercício 1 de 2"
        title="Exercícios de análise"
      />

      <ExercicioChecklist
        enunciado={EXERCICIO.enunciado}
        noticia={EXERCICIO.noticia}
        alternativas={EXERCICIO.alternativas}
        corretas={EXERCICIO.corretas}
        explicacao={EXERCICIO.explicacao}
        aoResponder={(resultado) =>
          registrarResultado(CHAVE_RESULTADOS, 0, resultado)
        }
        onProximo={handleProximo}
        ultimo={false}
      />
    </Layout>
  );
}

export default Pagina2;
