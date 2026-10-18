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

const STORAGE_KEY = "soundMuted";

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
