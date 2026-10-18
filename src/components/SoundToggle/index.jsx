import { useSound } from "../../contexts/SoundContext";
import { SpeakerIcon, SpeakerMutedIcon } from "../icons";
import "./styles.css";

function SoundToggle() {
  const { muted, toggleMuted } = useSound();

  const label = muted ? "Som desligado" : "Som ligado";

  return (
    <button
      type="button"
      className="sound-toggle"
      onClick={toggleMuted}
      aria-pressed={muted}
      aria-label={muted ? "Ativar som dos botões" : "Silenciar som dos botões"}
      title={muted ? "Ativar som dos botões" : "Silenciar som dos botões"}
    >
      {muted ? (
        <SpeakerMutedIcon className="sound-toggle-icon" />
      ) : (
        <SpeakerIcon className="sound-toggle-icon" />
      )}
      <span className="sound-toggle-text">{label}</span>
    </button>
  );
}

export default SoundToggle;
