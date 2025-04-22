import "./style-pages.css";

import React, { useState } from "react";

const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 155.7,
};

function Currency() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      setResult("");
      return;
    }
    const usd = parseFloat(amount) / rates[from];
    const converted = usd * rates[to];
    setResult(converted.toFixed(2));
  };

  return (
    <div className="convertmoney">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {Object.keys(rates).map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
      <span style={({ margin: "0 8px" }, { color: "white" })}>to</span>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {Object.keys(rates).map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
      <button onClick={handleConvert}>Convert</button>
      <div style={({ marginTop: 12 }, { color: "white", fontSize: 20 })}>
        Result: {result && `${result} ${to}`}
      </div>
    </div>
  );
}

export default Currency;
