/* Feedback sonoro suave ao pressionar botões/links.
   Gera um "clique" discreto pela Web Audio API — sem arquivos de áudio,
   sem rede e com volume baixo (gain 0.07). Falhar aqui nunca deve
   quebrar a interface, por isso tudo fica em try/catch.

   O som vale para todos os tamanhos de tela. O usuário pode silenciá-lo
   pelo botão no cabeçalho (ver SoundContext); a preferência é guardada
   no localStorage. */

let audioContext = null;

const VOLUME = 0.07;
const DURATION = 0.12;

/* Um mesmo gesto nunca deve soar duas vezes. Se algo disparar o som mais
   de uma vez em poucos milissegundos (ex.: listener duplicado), o segundo
   disparo cai dentro desta janela e é ignorado. Não afeta cliques reais
   em botões diferentes, que ficam bem mais distantes no tempo. */
const CLICK_MIN_INTERVAL = 40; // ms

const STORAGE_KEY = "soundMuted";

let lastClickAt = 0;

/* Estado de mudo mantido no módulo para que o clique atual já respeite
   a mudança — um clique em "silenciar" não toca, um em "ativar" confirma. */
let soundMuted = false;

if (typeof window !== "undefined") {
  try {
    soundMuted = window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    soundMuted = false;
  }
}

export function isSoundMuted() {
  return soundMuted;
}

export function setSoundMuted(muted) {
  soundMuted = Boolean(muted);
  try {
    window.localStorage.setItem(STORAGE_KEY, String(soundMuted));
  } catch {
    /* sem localStorage — segue só em memória */
  }
}

/* Reserva o AudioContext no primeiro gesto do usuário, para que o
   primeiro clique real já consiga tocar (política de autoplay). */
function garantirAudioContext() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!audioContext) {
      audioContext = new AudioCtx();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    return audioContext;
  } catch {
    return null;
  }
}

if (typeof window !== "undefined") {
  const preparar = () => {
    garantirAudioContext();
    window.removeEventListener("pointerdown", preparar);
    window.removeEventListener("keydown", preparar);
  };
  window.addEventListener("pointerdown", preparar, { once: true });
  window.addEventListener("keydown", preparar, { once: true });
}

export function playClickSound() {
  if (soundMuted) return;

  const agora = performance.now();
  if (agora - lastClickAt < CLICK_MIN_INTERVAL) return;
  lastClickAt = agora;

  try {
    const ctx = garantirAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(750, now);

    // ataque rápido e decaimento suave = som curto e discreto
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(VOLUME, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + DURATION);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + DURATION + 0.01);
  } catch {
    /* som é apenas um extra — ignora erros em silêncio */
  }
}

/* ---------------------------------------------------------------------------
   Listener global de clique.
   Fica FORA do ciclo de vida do React de propósito: registrar isso dentro de
   um useEffect permitia que duas assinaturas coexistissem (StrictMode remonta
   os efeitos, Fast Refresh e remontagens), e aí cada clique tocava o som duas
   vezes. Aqui mantemos sempre uma única assinatura — removendo a anterior,
   se houver, o que também cobre a reexecução do módulo no HMR.
--------------------------------------------------------------------------- */
function handleDocumentClick(event) {
  const target = event.target?.closest?.("a, button");
  if (target && !target.disabled) {
    playClickSound();
  }
}

if (typeof window !== "undefined") {
  // Uma única assinatura, sempre a mais recente (o removeEventListener
  // também protege contra o módulo ser reexecutado no HMR).
  if (window.__vptClickHandler) {
    document.removeEventListener("click", window.__vptClickHandler);
  }
  window.__vptClickHandler = handleDocumentClick;
  document.addEventListener("click", handleDocumentClick);
}
