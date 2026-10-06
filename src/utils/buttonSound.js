/* Feedback sonoro suave ao pressionar botões/links.
   Gera um "clique" discreto pela Web Audio API — sem arquivos de áudio,
   sem rede e com volume baixo (gain 0.07). Falhar aqui nunca deve
   quebrar a interface, por isso tudo fica em try/catch. */

let audioContext = null;

const VOLUME = 0.07;
const DURATION = 0.12;

/* O som só toca em telas de celular (mesmo breakpoint responsivo do site).
   Avaliado a cada clique, então acompanha a orientação do aparelho. */
export function isMobileViewport() {
  return window.matchMedia("(max-width: 640px)").matches;
}

export function playClickSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioContext) {
      audioContext = new AudioCtx();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const now = audioContext.currentTime;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(750, now);

    // ataque rápido e decaimento suave = som curto e discreto
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(VOLUME, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + DURATION);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + DURATION + 0.01);
  } catch {
    /* som é apenas um extra — ignora erros em silêncio */
  }
}
