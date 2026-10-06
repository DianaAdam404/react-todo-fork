import { useState } from "react";

function ColorBox() {
  const [isBlue, setIsBlue] = useState(false);

  return (
    <div className="color-demo">
      <div
        className={`color-swatch ${isBlue ? "swatch-blue" : "swatch-red"}`}
        aria-label={isBlue ? "Kék doboz" : "Piros doboz"}
      />
      <button
        className="button button-secondary"
        type="button"
        onClick={() => setIsBlue(!isBlue)}
      >
        Szín váltása{" "}
        <span className="color-name">{isBlue ? "kék" : "piros"}</span>
      </button>
    </div>
  );
}

export default ColorBox;
