import { useState } from "react";

export function useStockData() {
  const [dateInput, setDateInput] = useState("");
  const [stockData, setStockData] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (inputDate) => {
    setIsLoading(true);
    const url = `https://jsonmock.hackerrank.com/api/stocks?date=${encodeURIComponent(inputDate)}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.data.length > 0) {
        setStockData(data.data[0]);
        setNoResults(false);
      } else {
        setStockData(null);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setStockData(null);
      setNoResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    dateInput,
    setDateInput,
    stockData,
    noResults,
    isLoading,
    fetchData,
  };
}
