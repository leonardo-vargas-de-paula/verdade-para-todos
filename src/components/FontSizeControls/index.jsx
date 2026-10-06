import { useFontSize } from "../../contexts/FontSizeContext";
import "./styles.css";

function FontSizeControls() {
  const { scaleIndex, maxIndex, increase, decrease, reset } = useFontSize();

  return (
    <div className="fontsize-group" role="group" aria-label="Tamanho da letra">
      <button
        type="button"
        className="btn-icon"
        onClick={decrease}
        aria-label="Diminuir tamanho da letra"
        aria-pressed="false"
      >
        A−
      </button>
      <button
        type="button"
        className="btn-icon"
        onClick={reset}
        aria-label="Tamanho normal da letra"
        aria-pressed={scaleIndex === 0 ? "true" : "false"}
      >
        A
      </button>
      <button
        type="button"
        className="btn-icon"
        onClick={increase}
        aria-label="Aumentar tamanho da letra"
        aria-pressed={scaleIndex === maxIndex ? "true" : "false"}
      >
        A+
      </button>
    </div>
  );
}

export default FontSizeControls;
