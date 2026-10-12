import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { FontSizeProvider } from "./contexts/FontSizeContext";
import { playClickSound, isMobileViewport } from "./utils/buttonSound";
import RegistrarAcesso from "./components/RegistrarAcesso";
import ModuleHome from "./pages/ModuleHome";
import SelecaoModulos from "./pages/SelecaoModulos";
import BoasVindas from "./pages/BoasVindas";
import Unidade1 from "./pages/Unidade1/Pagina1";
import Unidade2 from "./pages/Unidade2/Pagina1";
import Unidade3Pagina1 from "./pages/Unidade3/Pagina1";
import Unidade3Pagina2 from "./pages/Unidade3/Pagina2";
import Unidade4 from "./pages/Unidade4/Pagina1";
import Unidade4Pagina2 from "./pages/Unidade4/Pagina2";
import Unidade4Pagina3 from "./pages/Unidade4/Pagina3";
import Modulo2Home from "./pages/Modulo2Home";
import Modulo2Unidade1Pagina1 from "./pages/Modulo2Unidade1/Pagina1";
import Modulo2Unidade2Pagina1 from "./pages/Modulo2Unidade2/Pagina1";
import { Analytics } from "@vercel/analytics/react";

/* Ao mudar de página, volta ao topo — como acontecia com a troca
   de arquivos HTML no protótipo. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* Feedback sonoro suave ao pressionar botões/links — apenas em telas
   de celular (≤640px), conforme isMobileViewport(). */
function ButtonSoundFeedback() {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest("a, button");
      if (target && !target.disabled && isMobileViewport()) {
        playClickSound();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

function App() {
  return (
    <FontSizeProvider>
      <BrowserRouter>
        <Analytics/>
        <ScrollToTop />
        <RegistrarAcesso />
        <ButtonSoundFeedback />
        <Routes>
      <Route path="/" element={<BoasVindas />} />
      <Route path="/modulos" element={<SelecaoModulos />} />
      <Route path="/modulo/1" element={<ModuleHome />} />
          <Route path="/modulo/2" element={<Modulo2Home />} />
      <Route
        path="/modulo/2/unidade/1"
        element={<Modulo2Unidade1Pagina1 />}
      />
      <Route
        path="/modulo/2/unidade/2"
        element={<Modulo2Unidade2Pagina1 />}
      />
          <Route path="/unidade/1" element={<Unidade1 />} />
          <Route path="/unidade/2" element={<Unidade2 />} />
          <Route path="/unidade/3" element={<Unidade3Pagina1 />} />
          <Route path="/unidade/3/2" element={<Unidade3Pagina2 />} />
          <Route path="/unidade/4" element={<Unidade4 />} />
          <Route path="/unidade/4/2" element={<Unidade4Pagina2 />} />
          <Route path="/unidade/4/3" element={<Unidade4Pagina3 />} />
          <Route
            path="/unidade/3/3"
            element={<Navigate to="/unidade/4" replace />}
          />
          <Route path="*" element={<BoasVindas />} />
        </Routes>
      </BrowserRouter>
    </FontSizeProvider>
  );
}

export default App;
