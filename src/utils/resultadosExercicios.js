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

/* Salva as alternativas marcadas antes da confirmação, para que o exercício
   continue igual ao voltar. Um resultado já confirmado não é sobrescrito. */
export function registrarRascunho(chave, indice, selecionadas) {
  const resultados = lerBruto(chave);
  if (resultados[indice]?.confirmado) return;

  resultados[indice] = {
    ...(resultados[indice] ?? {}),
    selecionadas,
    confirmado: false,
  };

  try {
    window.sessionStorage.setItem(chave, JSON.stringify(resultados));
  } catch {
    /* armazenamento indisponível — o rascunho apenas não é mantido */
  }
}

export function lerResultado(chave, indice) {
  return lerBruto(chave)[indice] ?? null;
}

export function lerResultados(chave) {
  return lerBruto(chave);
}
