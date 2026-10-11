import "./styles.css";

function IconList({ items }) {
  return (
    <ul className="icon-list">
      {items.map((item) => (
        <li key={item.title}>
          <span>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
            {item.content}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default IconList;
