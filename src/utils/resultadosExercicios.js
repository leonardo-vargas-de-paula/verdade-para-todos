/* Resultados dos exercícios de uma unidade, guardados na sessão.
   Permite que exercícios separados em páginas diferentes somem o placar
   final sem perder o que já foi respondido. */

function lerBruto(chave) {
  try {
    const bruto = window.sessionStorage.getItem(chave);
    const lista = bruto ? JSON.parse(bruto) : [];
    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

export function registrarResultado(chave, indice, resultado) {
  const resultados = lerBruto(chave);
  resultados[indice] = resultado;

  try {
    window.sessionStorage.setItem(chave, JSON.stringify(resultados));
  } catch {
    /* armazenamento indisponível — o placar final apenas não aparece */
  }
}

export function lerResultados(chave) {
  return lerBruto(chave);
}
