import { createContext, useCallback, useContext, useState } from "react";
import { isSoundMuted, setSoundMuted } from "../utils/buttonSound";

/* Preferência de som (ligado/mudo) controlada pelo usuário.
   O estado "de verdade" vive no módulo buttonSound (sincronamente, para
   valer no próprio clique); aqui só espelhamos para a interface reagir.
   A escolha é persistida no localStorage. */

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const [muted, setMutedState] = useState(() => isSoundMuted());

  const setMuted = useCallback((value) => {
    setSoundMuted(value);
    setMutedState(Boolean(value));
  }, []);

  const toggleMuted = useCallback(() => {
    setSoundMuted(!isSoundMuted());
    setMutedState(isSoundMuted());
  }, []);

  return (
    <SoundContext.Provider value={{ muted, setMuted, toggleMuted }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound precisa ser usado dentro de SoundProvider");
  }
  return context;
}
