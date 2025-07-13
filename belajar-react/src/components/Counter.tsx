import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, handleDecrement, handleIncrement, resetCount } = useCounter();

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Counter;
