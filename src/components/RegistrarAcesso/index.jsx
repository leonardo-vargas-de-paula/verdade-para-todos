import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { registrarVisita } from "../../utils/progresso";

/* Grava no localStorage cada rota visitada pelo usuário.
   Sem UI — os dados ficam disponíveis em lerVisitados(). */
function RegistrarAcesso() {
  const { pathname } = useLocation();

  useEffect(() => {
    registrarVisita(pathname);
  }, [pathname]);

  return null;
}

export default RegistrarAcesso;
