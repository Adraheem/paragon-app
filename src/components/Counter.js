import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementBy1 = () => setCount(count + 1);
  const incrementBy10 = () => setCount(count + 10);

  const decrementBy1 = () => setCount(count - 1);
  const decrementBy10 = () => setCount(count - 10);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter</h1>
      <h1 style={{ fontSize: 100 }}>{count}</h1>

      <button onClick={decrementBy10}>Decrement by 10</button>
      <button onClick={decrementBy1}>Decrement by 1</button>
      <button onClick={incrementBy1}>Increment by 1</button>
      <button onClick={incrementBy10}>Increment by 10</button>
    </div>
  );
};

export default Counter;
