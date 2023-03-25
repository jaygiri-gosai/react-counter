import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <div className="counter-container">
        <label>{count}</label>
      </div>
      <div className="counter-btn-container">
        <button className="increment-btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button onClick={() => setCount(count > 0 ? count - 1 : count)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
