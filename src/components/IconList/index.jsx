import "./styles.css";

/* Lista de rótulos: título forte + texto explicativo ao lado.
   Itens: [{ title, text }] */
function IconList({ items }) {
  return (
    <ul className="icon-list">
      {items.map((item) => (
        <li key={item.title}>
          <span>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default IconList;
