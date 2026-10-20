import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { FontSizeProvider } from "./contexts/FontSizeContext";
import { SoundProvider, useSound } from "./contexts/SoundContext";
import { ManualProvider } from "./contexts/ManualContext";
import { playClickSound } from "./utils/buttonSound";
import RegistrarAcesso from "./components/RegistrarAcesso";
import ManualModal from "./components/ManualModal";
import ModuleHome from "./pages/Modulo1/Home";
import SelecaoModulos from "./pages/SelecaoModulos";
import BoasVindas from "./pages/BoasVindas";
import Unidade1 from "./pages/Modulo1/Unidade1/Pagina1";
import Unidade2 from "./pages/Modulo1/Unidade2/Pagina1";
import Unidade3Pagina1 from "./pages/Modulo1/Unidade3/Pagina1";
import Unidade3Pagina2 from "./pages/Modulo1/Unidade3/Pagina2";
import Unidade4 from "./pages/Modulo1/Unidade4/Pagina1";
import Unidade4Pagina2 from "./pages/Modulo1/Unidade4/Pagina2";
import Unidade4Pagina3 from "./pages/Modulo1/Unidade4/Pagina3";
import Unidade4Pagina4 from "./pages/Modulo1/Unidade4/Pagina4";
import Unidade4Pagina5 from "./pages/Modulo1/Unidade4/Pagina5";
import Unidade4Pagina6 from "./pages/Modulo1/Unidade4/Pagina6";
import Modulo2Home from "./pages/Modulo2/Home";
import Modulo2Unidade1Pagina1 from "./pages/Modulo2/Unidade1/Pagina1";
import Modulo2Unidade2Pagina1 from "./pages/Modulo2/Unidade2/Pagina1";
import Modulo2Unidade2Pagina2 from "./pages/Modulo2/Unidade2/Pagina2";
import Modulo2Unidade2Pagina3 from "./pages/Modulo2/Unidade2/Pagina3";
import Modulo2Unidade2Pagina4 from "./pages/Modulo2/Unidade2/Pagina4";
import Modulo2Unidade2Pagina5 from "./pages/Modulo2/Unidade2/Pagina5";
import Modulo2Unidade2Pagina6 from "./pages/Modulo2/Unidade2/Pagina6";
import Modulo3Home from "./pages/Modulo3/Home";
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

/* Feedback sonoro suave ao pressionar botões/links — em todos os
   tamanhos de tela. O som pode ser silenciado pelo botão no cabeçalho
   (SoundContext); playClickSound() já respeita essa preferência. */
function ButtonSoundFeedback() {
  // Lê o contexto para reagir ao botão de mudo (o valor em si é checado
  // dentro de playClickSound, de forma síncrona).
  useSound();

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest("a, button");
      if (target && !target.disabled) {
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
      <SoundProvider>
        <BrowserRouter>
          <ManualProvider>
            <Analytics />
            <ScrollToTop />
            <RegistrarAcesso />
            <ButtonSoundFeedback />
            <ManualModal />
            <Routes>
              <Route path="/" element={<BoasVindas />} />
              <Route path="/modulos" element={<SelecaoModulos />} />
              <Route path="/modulo/1" element={<ModuleHome />} />
              <Route path="/modulo/2" element={<Modulo2Home />} />
              <Route path="/modulo/3" element={<Modulo3Home />} />
              <Route
                path="/modulo/2/unidade/1"
                element={<Modulo2Unidade1Pagina1 />}
              />
              <Route
                path="/modulo/2/unidade/2"
                element={<Modulo2Unidade2Pagina1 />}
              />
              <Route
                path="/modulo/2/unidade/2/2"
                element={<Modulo2Unidade2Pagina2 />}
              />
              <Route
                path="/modulo/2/unidade/2/3"
                element={<Modulo2Unidade2Pagina3 />}
              />
              <Route
                path="/modulo/2/unidade/2/4"
                element={<Modulo2Unidade2Pagina4 />}
              />
              <Route
                path="/modulo/2/unidade/2/5"
                element={<Modulo2Unidade2Pagina5 />}
              />
              <Route
                path="/modulo/2/unidade/2/6"
                element={<Modulo2Unidade2Pagina6 />}
              />
              <Route path="/unidade/1" element={<Unidade1 />} />
              <Route path="/unidade/2" element={<Unidade2 />} />
              <Route path="/unidade/3" element={<Unidade3Pagina1 />} />
              <Route path="/unidade/3/2" element={<Unidade3Pagina2 />} />
              <Route path="/unidade/4" element={<Unidade4 />} />
              <Route path="/unidade/4/2" element={<Unidade4Pagina2 />} />
              <Route path="/unidade/4/3" element={<Unidade4Pagina3 />} />
              <Route path="/unidade/4/4" element={<Unidade4Pagina4 />} />
              <Route path="/unidade/4/5" element={<Unidade4Pagina5 />} />
              <Route path="/unidade/4/6" element={<Unidade4Pagina6 />} />
              <Route
                path="/unidade/3/3"
                element={<Navigate to="/unidade/4" replace />}
              />
              <Route path="*" element={<BoasVindas />} />
            </Routes>
          </ManualProvider>
        </BrowserRouter>
      </SoundProvider>
    </FontSizeProvider>
  );
}

export default App;
