import "./style-pages.css";
import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [storedValue, setStoredValue] = useState(null);

  const clearAll = () => {
    setDisplay("0");
    setOperation(null);
    setWaitingForOperand(false);
    setStoredValue(null);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const toggleSign = () => {
    setDisplay(display.charAt(0) === "-" ? display.substr(1) : "-" + display);
  };

  const inputPercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (storedValue === null) {
      setStoredValue(inputValue);
    } else if (operation) {
      const currentValue = storedValue || 0;
      let newValue = 0;

      switch (operation) {
        case "+":
          newValue = currentValue + inputValue;
          break;
        case "-":
          newValue = currentValue - inputValue;
          break;
        case "×":
          newValue = currentValue * inputValue;
          break;
        case "÷":
          newValue = currentValue / inputValue;
          break;
        default:
          break;
      }

      setStoredValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculateSquareRoot = () => {
    const value = parseFloat(display);
    if (value >= 0) {
      setDisplay(String(Math.sqrt(value)));
    }
  };

  const memoryRecall = () => {
    setDisplay(String(memory));
    setWaitingForOperand(true);
  };

  const memoryClear = () => {
    setMemory(0);
  };

  const memoryAdd = () => {
    setMemory(memory + parseFloat(display));
  };

  const memorySubtract = () => {
    setMemory(memory - parseFloat(display));
  };

  const handleEquals = () => {
    if (operation && !waitingForOperand) {
      performOperation(null);
    } else {
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <div className="memory-indicator">{memory !== 0 ? "M" : ""}</div>
          <div className="display-value">{display}</div>
        </div>

        <div className="keypad">
          <button className="btn-memory" onClick={memoryClear}>
            MC
          </button>
          <button className="btn-memory" onClick={memoryRecall}>
            MR
          </button>
          <button className="btn-memory" onClick={memoryAdd}>
            M+
          </button>
          <button className="btn-memory" onClick={memorySubtract}>
            M-
          </button>

          <button className="btn-function" onClick={clearAll}>
            AC
          </button>
          <button className="btn-function" onClick={toggleSign}>
            ±
          </button>
          <button className="btn-function" onClick={inputPercent}>
            %
          </button>
          <button
            className="btn-operator"
            onClick={() => performOperation("÷")}
          >
            ÷
          </button>

          <button className="btn-number" onClick={() => inputDigit(7)}>
            7
          </button>
          <button className="btn-number" onClick={() => inputDigit(8)}>
            8
          </button>
          <button className="btn-number" onClick={() => inputDigit(9)}>
            9
          </button>
          <button
            className="btn-operator"
            onClick={() => performOperation("×")}
          >
            ×
          </button>

          <button className="btn-number" onClick={() => inputDigit(4)}>
            4
          </button>
          <button className="btn-number" onClick={() => inputDigit(5)}>
            5
          </button>
          <button className="btn-number" onClick={() => inputDigit(6)}>
            6
          </button>
          <button
            className="btn-operator"
            onClick={() => performOperation("-")}
          >
            -
          </button>

          <button className="btn-number" onClick={() => inputDigit(1)}>
            1
          </button>
          <button className="btn-number" onClick={() => inputDigit(2)}>
            2
          </button>
          <button className="btn-number" onClick={() => inputDigit(3)}>
            3
          </button>
          <button
            className="btn-operator"
            onClick={() => performOperation("+")}
          >
            +
          </button>

          <button className="btn-function" onClick={calculateSquareRoot}>
            √
          </button>
          <button className="btn-number" onClick={() => inputDigit(0)}>
            0
          </button>
          <button className="btn-number" onClick={inputDot}>
            .
          </button>
          <button className="btn-equals" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
