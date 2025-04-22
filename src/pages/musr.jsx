import "./style-pages.css";
import React, { useState } from "react";

const units = {
  length: { m: 1, cm: 100, in: 39.3701, ft: 3.28084 },
  weight: { kg: 1, g: 1000, lb: 2.20462, oz: 35.274 },
};

function UnitConvert() {
  const [type, setType] = useState("length");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("cm");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      setResult("");
      return;
    }
    const base = parseFloat(amount) / units[type][from];
    const converted = base * units[type][to];
    setResult(converted.toFixed(4));
  };

  const unitOptions = Object.keys(units[type]);

  return (
    <div className="unitconvert">
      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          setFrom(Object.keys(units[e.target.value])[0]);
          setTo(Object.keys(units[e.target.value])[1]);
        }}
      >
        <option value="length">Length</option>
        <option value="weight">Weight</option>
      </select>
      <div style={{ marginTop: 8 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {unitOptions.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
        <span>to</span>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {unitOptions.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
        <button style={{ marginLeft: 8 }} onClick={handleConvert}>
          Convert
        </button>
      </div>
      <div style={{ marginTop: 12 }}>Result: {result && `${result} ${to}`}</div>
    </div>
  );
}

export default UnitConvert;
