import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [data, setData] = useState({ windowPrevState: [], windowCurrState: [], numbers: [], ave: null });

  const fetchNumbers = async (numberId) => {
    try {
      const response = await axios.get(`http://localhost:9876/number/e${numberId}`, { timeout: 500 });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
      // Handle error or timeout
    }
  };

  // Example of fetching even numbers on component mount
  useEffect(() => {
    fetchNumbers('e');
  }, []);

  return (
    <div>
      <h1>Average Calculator</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AverageCalculator;
