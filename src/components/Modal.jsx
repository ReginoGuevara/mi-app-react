function Modal({ titulo, abierto, children }) {
  if (!abierto) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          minWidth: "300px",
          maxWidth: "500px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        }}
      >
        <h3>{titulo}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;