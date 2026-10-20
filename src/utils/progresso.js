/* Progresso do curso no navegador (localStorage).
   Guarda a lista de rotas já visitadas — hoje só gravamos;
   o uso visual (selos, etc.) pode consumir lerVisitados() depois. */

import {
  MODULO3,
  UNIDADES_MODULO1,
  UNIDADES_MODULO2,
} from "../data/modulos";

const CHAVE = "vpt:visitados";
const CHAVE_CONCLUIDAS = "vpt:unidades-concluidas";

export function lerVisitados() {
  try {
    const bruto = window.localStorage.getItem(CHAVE);
    const lista = bruto ? JSON.parse(bruto) : [];
    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

export function registrarVisita(pathname) {
  const rota = normalizeRota(pathname);
  if (!rota) return;

  try {
    const visitados = lerVisitados();
    if (!visitados.includes(rota)) {
      visitados.push(rota);
      window.localStorage.setItem(CHAVE, JSON.stringify(visitados));
    }
  } catch {
    /* armazenamento indisponível (modo privado, etc.) — ignora */
  }
}

/* Unidade considerada "lida": todas as páginas dela já visitadas.
   `paginaAtual` (opcional) é ignorada — quem está nela já está lendo. */
export function estaUnidadeCompleta(paginas, paginaAtual = null) {
  const visitados = lerVisitados();
  return paginas
    .filter((pagina) => pagina !== paginaAtual)
    .every((pagina) => visitados.includes(pagina));
}

/* Primeira página da unidade que ainda não foi visitada (ou undefined). */
export function primeiraPaginaNaoLida(paginas, paginaAtual = null) {
  const visitados = lerVisitados();
  return paginas
    .filter((pagina) => pagina !== paginaAtual)
    .find((pagina) => !visitados.includes(pagina));
}

/* Módulo 1 concluído: todas as unidades (e páginas) lidas por completo. */
export function modulo1Completo() {
  return UNIDADES_MODULO1.every((unidade) =>
    estaUnidadeCompleta(unidade.paginas)
  );
}

/* ---- Unidades concluídas (Módulo 2 · exercícios) ------------------------
   Diferente da leitura de páginas do Módulo 1, aqui a conclusão é marcada
   explicitamente quando o usuário termina os exercícios da unidade. */

function lerConcluidas() {
  try {
    const bruto = window.localStorage.getItem(CHAVE_CONCLUIDAS);
    const lista = bruto ? JSON.parse(bruto) : [];
    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

/* Marca uma unidade (rota) como concluída — chamado ao terminar os exercícios. */
export function marcarUnidadeConcluida(rota) {
  const alvo = normalizeRota(rota);
  if (!alvo) return;

  try {
    const concluidas = lerConcluidas();
    if (!concluidas.includes(alvo)) {
      concluidas.push(alvo);
      window.localStorage.setItem(CHAVE_CONCLUIDAS, JSON.stringify(concluidas));
    }
  } catch {
    /* armazenamento indisponível (modo privado, etc.) — ignora */
  }
}

/* Unidade de exercícios concluída? */
export function unidadeConcluida(rota) {
  const alvo = normalizeRota(rota);
  return !!alvo && lerConcluidas().includes(alvo);
}

/* Módulo 2 concluído: todas as unidades de exercícios terminadas. */
export function modulo2Completo() {
  return UNIDADES_MODULO2.every((unidade) => unidadeConcluida(unidade.to));
}

/* Módulo 3 concluído: a página final já foi visitada. */
export function modulo3Completo() {
  return estaUnidadeCompleta(MODULO3.paginas);
}

/* Normaliza a rota removendo a barra final (exceto na raiz). */
function normalizeRota(pathname) {
  if (!pathname) return "";
  return pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
}
