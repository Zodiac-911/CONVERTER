import "./style-pages.css";
import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input
        style={{ width: "100%", marginBottom: 8 }}
        type="text"
        value={input}
        readOnly
      />
      <div className="result" style={{ marginBottom: 8 }}>
        Result: {result}
      </div>
      <div
        className="btn-cnt"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
        }}
      >
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "+",
          "=",
        ].map((val) => (
          <button
            key={val}
            onClick={() => (val === "=" ? handleEqual() : handleClick(val))}
          >
            {val}
          </button>
        ))}
        <button
          style={{ gridColumn: "span 4", width: "100%", borderRadius: "16px" }}
          onClick={handleClear}
        >
          AC
        </button>
      </div>
    </div>
  );
}

export default Calculator;
