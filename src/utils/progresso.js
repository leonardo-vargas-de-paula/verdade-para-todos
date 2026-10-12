/* Progresso do curso no navegador (localStorage).
   Guarda a lista de rotas já visitadas — hoje só gravamos;
   o uso visual (selos, etc.) pode consumir lerVisitados() depois. */

const CHAVE = "vpt:visitados";

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
  if (!pathname) return;
  const rota = pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

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
