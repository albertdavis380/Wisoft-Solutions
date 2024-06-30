import React from "react";
import { useStockData } from "./useStockData";
import "./index.css";

export default function StockData() {
  const {
    dateInput,
    setDateInput,
    stockData,
    noResults,
    isLoading,
    fetchData,
  } = useStockData();

  const handleInputChange = (event) => {
    setDateInput(event.target.value);
  };

  const handleSearch = () => {
    fetchData(dateInput);
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          placeholder="5-January-2000"
          id="app-input"
          data-testid="app-input"
          value={dateInput}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        <button
          className=""
          id="submit-button"
          data-testid="submit-button"
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </section>
      {stockData ? (
        <ul
          className="mt-50 slide-up-fade-in styled"
          id="stockData"
          data-testid="stock-data"
        >
          <li className="py-10">Open: {stockData.open}</li>
          <li className="py-10">Close: {stockData.close}</li>
          <li className="py-10">High: {stockData.high}</li>
          <li className="py-10">Low: {stockData.low}</li>
        </ul>
      ) : (
        noResults && (
          <div
            className="mt-50 slide-up-fade-in"
            id="no-result"
            data-testid="no-result"
          >
            No Results Found
          </div>
        )
      )}
    </div>
  );
}
