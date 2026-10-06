function Greeting({ name, age, color }) {
  return (
    <p className="greeting" style={{ color }}>
      Szia, <strong>{name}</strong>! {age} éves. {color}.
    </p>
  );
}

export default Greeting;
