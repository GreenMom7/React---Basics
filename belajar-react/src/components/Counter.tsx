import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, handleDecrement, handleIncrement, resetCount } = useCounter();

  return (
    <>
      <h1>Let's play</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          padding: "24px",
          border: "2px solid #1976d2",
          borderRadius: "12px",
          background: "#f5faff",
          width: "180px",
          margin: "24px auto",
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "8px 16px",
              fontSize: "18px",
              borderRadius: "6px",
              border: "1px solid #1976d2",
              background: "#fff",
              color: "#1976d2",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onClick={handleIncrement}
          >
            +
          </button>
          <p
            style={{
              margin: "0",
              fontSize: "20px",
              fontWeight: "bold",
              minWidth: "32px",
              textAlign: "center",
            }}
          >
            {count}
          </p>
          <button
            style={{
              padding: "8px 16px",
              fontSize: "18px",
              borderRadius: "6px",
              border: "1px solid #1976d2",
              background: "#fff",
              color: "#1976d2",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <button
          style={{
            padding: "6px 18px",
            fontSize: "15px",
            borderRadius: "6px",
            border: "none",
            background: "#1976d2",
            color: "#fff",
            cursor: "pointer",
            marginTop: "8px",
            transition: "background 0.2s",
          }}
          onClick={resetCount}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
