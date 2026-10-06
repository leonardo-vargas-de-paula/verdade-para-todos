import { WarningIcon } from "../icons";
import "./styles.css";

/* Caixa de alerta — cor + ícone + palavra escrita, nunca só a cor.
   variant: "danger" | "success" | "tip" */
function Callout({ variant = "tip", title, icon, children }) {
  const resolvedIcon =
    icon !== undefined ? icon : variant === "danger" ? <WarningIcon className="icon" /> : null;

  return (
    <div className={`callout ${variant}`}>
      {resolvedIcon}
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Callout;
