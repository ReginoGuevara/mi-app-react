import { useState } from "react";

function Acordeon({ titulo, children, defaultExpandido = false }) {
  const [expandido, setExpandido] = useState(defaultExpandido);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "10px 0",
        overflow: "hidden",
      }}
    >
      <div
        onClick={() => setExpandido(!expandido)}
        style={{
          backgroundColor: "#f5f5f5",
          padding: "12px 15px",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          userSelect: "none",
        }}
      >
        <span>{titulo}</span>
        <span>{expandido ? "▼" : "►"}</span>
      </div>
      {expandido && (
        <div style={{ padding: "15px", backgroundColor: "white" }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Acordeon;