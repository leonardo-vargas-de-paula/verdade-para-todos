import "./styles.css";

function Hero({ kicker, title, lead }) {
  return (
    <section className="hero">
      {kicker && <span className="kicker">{kicker}</span>}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
    </section>
  );
}

export default Hero;
