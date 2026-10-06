function TodoList({ items }) {
  return (
    <ul className="food-list">
      {items.map((item) => (
        <li key={item}>
          <span className="list-mark" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
