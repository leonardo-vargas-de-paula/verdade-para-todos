/* "Manual" do curso — pop-up de orientação exibido na primeira vez que o
   usuário acessa a tela de escolha de módulos. Guarda no localStorage
   apenas o sinal de "já vi": a partir daí ele só reabre pelo botão "Manual"
   no cabeçalho. Sair pelo X ou concluir marca como visto. */

const CHAVE = "vpt:manual-visto";

export function manualVisto() {
  try {
    return window.localStorage.getItem(CHAVE) === "true";
  } catch {
    return false;
  }
}

export function marcarManualVisto() {
  try {
    window.localStorage.setItem(CHAVE, "true");
  } catch {
    /* armazenamento indisponível (modo privado, etc.) — ignora */
  }
}
