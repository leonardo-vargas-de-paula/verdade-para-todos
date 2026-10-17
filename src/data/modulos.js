/* Estrutura das unidades do Módulo 1 — `paginas` lista as rotas que o
   usuário precisa visitar para a unidade valer como "lida"
   (mesma regra do selo ✓ e do bloqueio de avanço). */
export const UNIDADES_MODULO1 = [
  {
    number: "1",
    title: "Unidade 1 — O que é Fake News",
    to: "/unidade/1",
    paginas: ["/unidade/1"],
  },
  {
    number: "2",
    title: "Unidade 2 — Os tipos de notícia falsa",
    to: "/unidade/2",
    paginas: ["/unidade/2"],
  },
  {
    number: "3",
    title: "Unidade 3 — Como as Fake News são construídas",
    to: "/unidade/3",
    paginas: ["/unidade/3", "/unidade/3/2"],
  },
  {
    number: "4",
    title: "Unidade 4 — Como conferir antes de acreditar",
    to: "/unidade/4",
    paginas: ["/unidade/4", "/unidade/4/2", "/unidade/4/3", "/unidade/4/4"],
  },
];
