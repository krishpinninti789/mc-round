import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory((prev) => [...prev, newCount]);
  };
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory((prev) => [...prev, newCount]);
  };
  const handleReset = () => {
    const newCount = 0;
    setCount(newCount);
    setHistory((prev) =>
      prev[prev.length - 1] === newCount ? prev : [...prev, newCount],
    );
  };
  return (
    <div className="h-1/2 flex flex-col w-1/2 gap-y-3 justify-center items-center bg-slate-400 m-40">
      <h1 className="text-2xl">Counter</h1>
      {count}
      <button onClick={handleDecrease} className="bg-red-500 p-2 rounded-lg">
        Decrement
      </button>
      <button onClick={handleIncrease} className="bg-green-500 p-2 rounded-lg">
        Increment
      </button>
      <button onClick={handleReset} className="bg-yellow-700 p-2 rounded-lg">
        Reset
      </button>
      <h1>History</h1>
      <div className="flex gap-x-2">
        {history?.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
    </div>
  );
};

export default CounterApp;
