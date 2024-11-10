import React, { useState } from 'react';

export default function Counter({ incrementBy, buttonStyle }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count + incrementBy > 10) {
      setCount(0);
    } else {
      setCount(count + incrementBy);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <p>Count: {count}</p>
      <button style={buttonStyle} onClick={handleIncrement}>
        Increment by {incrementBy}
      </button>
    </div>
  );
}2