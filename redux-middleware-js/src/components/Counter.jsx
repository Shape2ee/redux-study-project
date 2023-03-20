import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <button onClick={onIncrease}>+1</button>
      <h1>{number}</h1>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;