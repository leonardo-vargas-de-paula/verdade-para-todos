import "./styles.css";

/* Bloco curto de conteúdo — um assunto por vez. */
function SectionCard({ title, children }) {
  return (
    <section className="section-card">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export default SectionCard;
