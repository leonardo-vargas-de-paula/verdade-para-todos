import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { FontSizeProvider } from "./contexts/FontSizeContext";
import { playClickSound, isMobileViewport } from "./utils/buttonSound";
import ModuleHome from "./pages/ModuleHome";
import Unidade1 from "./pages/Unidade1/Pagina1";
import Unidade2 from "./pages/Unidade2/Pagina1";
import Unidade3Pagina1 from "./pages/Unidade3/Pagina1";
import Unidade3Pagina2 from "./pages/Unidade3/Pagina2";
import Unidade4 from "./pages/Unidade4/Pagina1";

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
        <ScrollToTop />
        <ButtonSoundFeedback />
        <Routes>
          <Route path="/" element={<ModuleHome />} />
          <Route path="/unidade/1" element={<Unidade1 />} />
          <Route path="/unidade/2" element={<Unidade2 />} />
          <Route path="/unidade/3" element={<Unidade3Pagina1 />} />
          <Route path="/unidade/3/2" element={<Unidade3Pagina2 />} />
          <Route path="/unidade/4" element={<Unidade4 />} />
          <Route
            path="/unidade/3/3"
            element={<Navigate to="/unidade/4" replace />}
          />
          <Route path="*" element={<ModuleHome />} />
        </Routes>
      </BrowserRouter>
    </FontSizeProvider>
  );
}

export default App;
