import React, { useState } from "react";

const CounterFunc = () => {
  const [countNum, setCountNum] = useState(0);

  const decrement = () => {
    if (countNum > 0) {
      setCountNum(countNum - 1);
    }
  };

  const reset = () => {
    setCountNum(0);
  };

  return (
    <div className="countFunction">
      <h1 style={{ color: "red" }}>Counter Function</h1>
      <button onClick={decrement}>-</button>
      <h1 className="functNum">{countNum}</h1>
      <button onClick={() => setCountNum(countNum + 1)}>+</button>
      <div className="reset">
        <button onClick={reset}>reset</button>
      </div>
      <hr />
    </div>
  );
};

export default CounterFunc;
