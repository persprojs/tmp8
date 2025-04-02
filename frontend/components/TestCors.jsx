import React, { useEffect, useState } from 'react';

const TestCors = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCorsTest = async () => {
      try {
        const response = await fetch('http://localhost:3003/test-cors');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage('Error fetching CORS test');
      }
    };

    fetchCorsTest();
  }, []);

  return (
    <div>
      <h1>CORS Test</h1>
      <p>{message}</p>
    </div>
  );
};

export default TestCors;
