import "./style-pages.css";

import React, { useState, useEffect } from "react";

const Currency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("DZD");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "AUD", name: "Australian Dollar" },
  ];

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setIsLoading(true);
      try {
        // Simulated API response with DZD rates
        const simulatedRates = {
          USD: {
            DZD: 134.5,
            EUR: 0.85,
            GBP: 0.73,
            JPY: 110.15,
            CAD: 1.25,
            AUD: 1.3,
          },
          EUR: {
            DZD: 158.2,
            USD: 1.18,
            GBP: 0.86,
            JPY: 129.53,
            CAD: 1.47,
            AUD: 1.53,
          },
          DZD: {
            USD: 0.0074,
            EUR: 0.0063,
            GBP: 0.0054,
            JPY: 0.82,
            CAD: 0.0093,
            AUD: 0.0097,
          },
        };

        const rate = simulatedRates[fromCurrency]?.[toCurrency] || 1;
        setExchangeRate(rate);
        setConvertedAmount((amount * rate).toFixed(2));
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
      setIsLoading(false);
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount(value);
    setConvertedAmount((value * exchangeRate).toFixed(2));
  };

  const handleCurrencyChange = (e, type) => {
    const value = e.target.value;
    type === "from" ? setFromCurrency(value) : setToCurrency(value);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="converter-container compact">
      <div className="converter compact">
        <h2 className="converter-title">Currency Converter</h2>

        <div className="input-group compact">
          <div className="amount-input compact">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              min="0"
              step="0.01"
              placeholder="Amount"
            />
          </div>

          <div className="currency-selectors compact">
            <select
              value={fromCurrency}
              onChange={(e) => handleCurrencyChange(e, "from")}
              className="currency-dropdown compact"
            >
              {currencies.map((currency) => (
                <option key={`from-${currency.code}`} value={currency.code}>
                  {currency.code}
                </option>
              ))}
            </select>

            <button className="swap-btn compact" onClick={swapCurrencies}>
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" />
              </svg>
            </button>

            <select
              value={toCurrency}
              onChange={(e) => handleCurrencyChange(e, "to")}
              className="currency-dropdown compact"
            >
              {currencies.map((currency) => (
                <option key={`to-${currency.code}`} value={currency.code}>
                  {currency.code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="result-container compact">
          {isLoading ? (
            <div className="loading">...</div>
          ) : (
            <>
              <div className="result compact">
                <h3>
                  {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                </h3>
              </div>
              <div className="rate-info compact">
                1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Currency;
