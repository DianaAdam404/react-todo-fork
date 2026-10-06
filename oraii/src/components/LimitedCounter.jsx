import { useState } from "react";

function LimitedCounter() {
  const [count, setCount] = useState(5);
  const minimum = 0;
  const maximum = 10;

  function decrease() {
    if (count > minimum) setCount(count - 1);
  }

  function increase() {
    if (count < maximum) setCount(count + 1);
  }

  return (
    <div className="stepper">
      <button
        className="button button-step"
        type="button"
        onClick={decrease}
        disabled={count === minimum}
        aria-label="Csökkentés"
      >
        −
      </button>
      <output className="step-value" aria-live="polite">
        {count}
      </output>
      <button
        className="button button-step"
        type="button"
        onClick={increase}
        disabled={count === maximum}
        aria-label="Növelés"
      >
        +
      </button>
      <span className="range-note">
        {minimum}–{maximum}
      </span>
    </div>
  );
}

export default LimitedCounter;
