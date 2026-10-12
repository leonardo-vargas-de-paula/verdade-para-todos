import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ConfirmDialog from "../ConfirmDialog";
import "./styles.css";

/* Navegação simples entre unidades — dois botões grandes, sem ambiguidade.
   prev/next: { to, label, title }
   next também aceita { bloqueado: true, paginaFaltante } — o botão vira um
   aviso e abre um diálogo levando para a página ainda não lida. */
function UnitNav({ prev, next }) {
  const navigate = useNavigate();
  const [avisoAberto, setAvisoAberto] = useState(false);

  const handleIrParaFaltante = () => {
    setAvisoAberto(false);
    if (next?.paginaFaltante) {
      navigate(next.paginaFaltante);
    }
  };

  return (
    <nav className="unit-nav" aria-label="Navegação entre unidades">
      {prev && (
        <Link className="prev" to={prev.to}>
          <span className="label">{prev.label}</span>
          <span className="title">{prev.title}</span>
        </Link>
      )}
      {next &&
        (next.bloqueado ? (
          <button
            type="button"
            className="next"
            onClick={() => setAvisoAberto(true)}
          >
            <span className="label">{next.label}</span>
            <span className="title">{next.title}</span>
          </button>
        ) : (
          <Link className="next" to={next.to}>
            <span className="label">{next.label}</span>
            <span className="title">{next.title}</span>
          </Link>
        ))}
      <ConfirmDialog
        open={avisoAberto}
        title="Unidade ainda não terminada"
        message="Você precisa ler todas as páginas desta unidade antes de avançar. Deseja ir para a página que falta?"
        confirmLabel="Ir para a página que falta"
        cancelLabel="Continuar aqui"
        onConfirm={handleIrParaFaltante}
        onCancel={() => setAvisoAberto(false)}
      />
    </nav>
  );
}

export default UnitNav;
