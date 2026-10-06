import { createContext, useContext, useEffect, useState } from "react";

/* Escala da letra controlada pelo usuário: Normal / Grande / Muito grande.
   Estado apenas em memória (sem localStorage), igual ao protótipo. */
const SCALES = [1, 1.2, 1.45];

const FontSizeContext = createContext(null);

export function FontSizeProvider({ children }) {
  const [scaleIndex, setScaleIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty("--user-scale", SCALES[scaleIndex]);
  }, [scaleIndex]);

  const increase = () => setScaleIndex((i) => Math.min(i + 1, SCALES.length - 1));
  const decrease = () => setScaleIndex((i) => Math.max(i - 1, 0));
  const reset = () => setScaleIndex(0);

  return (
    <FontSizeContext.Provider
      value={{
        scaleIndex,
        maxIndex: SCALES.length - 1,
        increase,
        decrease,
        reset,
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize precisa ser usado dentro de FontSizeProvider");
  }
  return context;
}
