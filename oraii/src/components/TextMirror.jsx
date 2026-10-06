import { useState } from "react";

function TextMirror() {
  const [text, setText] = useState("");

  return (
    <div className="stack">
      <label className="field-label" htmlFor="text-mirror">
        Írj be valamit
      </label>
      <input
        id="text-mirror"
        className="text-input"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Kezdj el gépelni..."
      />
      <p className="mirror-output">
        Te ezt gépelted: <strong>{text || "..."}</strong>
      </p>
    </div>
  );
}

export default TextMirror;
