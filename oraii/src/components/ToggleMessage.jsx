import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="stack">
      <button
        className="button button-secondary"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Elrejt" : "Mutat"}
      </button>
      {isVisible && <p className="message">Ez egy rejtett szöveg!</p>}
    </div>
  );
}

export default ToggleMessage;
