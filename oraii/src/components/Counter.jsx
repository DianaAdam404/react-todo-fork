import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-demo">
      <output className="count-value" aria-live="polite">
        {count}
      </output>
      <button
        className="button button-secondary"
        type="button"
        onClick={() => setCount((currentCount) => currentCount - 1)}
      >
        − Csökkentés
      </button>
      <button
        className="button button-primary"
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Növelés <span aria-hidden="true">+</span>
      </button>
    </div>
  );
}

export default Counter;
