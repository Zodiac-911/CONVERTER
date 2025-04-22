import "./style-pages.css";
import React, { useState } from "react";

function TempConvert() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(
      value === "" ? "" : ((parseFloat(value) * 9) / 5 + 32).toFixed(2)
    );
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(
      value === "" ? "" : (((parseFloat(value) - 32) * 5) / 9).toFixed(2)
    );
  };

  return (
    <div className="tempconvert">
      <h2>Temperature Converter</h2>
      <div style={{ marginBottom: 8 }}>
        <label>Celsius: </label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </div>
      <div>
        <label>Fahrenheit: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default TempConvert;
