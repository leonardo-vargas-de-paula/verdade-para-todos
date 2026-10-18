import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { manualVisto } from "../utils/manual";

/* Controle global do "Manual" do curso — fica no App para que o pop-up
   possa abrir e fechar independente da tela atual.
   - Abre sozinho na PRIMEIRA visita à tela de escolha de módulos.
   - Pode ser reaberto a qualquer momento pelo botão "Manual" no cabeçalho. */

const ManualContext = createContext(null);

const ROTA_ABERTURA = "/modulos";

export function ManualProvider({ children }) {
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();
  const jaAbriuRef = useRef(false);

  useEffect(() => {
    const rota = pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

    if (rota === ROTA_ABERTURA && !jaAbriuRef.current && !manualVisto()) {
      jaAbriuRef.current = true;
      setAberto(true);
    }
  }, [pathname]);

  const abrirManual = useCallback(() => setAberto(true), []);
  const fecharManual = useCallback(() => setAberto(false), []);

  return (
    <ManualContext.Provider value={{ aberto, abrirManual, fecharManual }}>
      {children}
    </ManualContext.Provider>
  );
}

export function useManual() {
  const context = useContext(ManualContext);
  if (!context) {
    throw new Error("useManual precisa ser usado dentro de ManualProvider");
  }
  return context;
}
