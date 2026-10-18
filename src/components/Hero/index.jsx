import "./styles.css";

/* `back` é o elemento do botão de voltar (o próprio BackBar).
   Quando existe, ele fica na mesma linha do kicker: botão à esquerda,
   kicker à direita, com uma linha divisória fina embaixo. */
function Hero({ kicker, title, lead, back }) {
  const kickerNode = kicker ? <span className="kicker">{kicker}</span> : null;

  return (
    <section className="hero">
      {back ? (
        <div className="hero-top">
          {back}
          {kickerNode}
        </div>
      ) : (
        kickerNode
      )}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
    </section>
  );
}

export default Hero;
