function BotonAccion({ texto, variante = "primario", disabled = false, onClick }) {
  const estilos = {
    primario: { backgroundColor: "#007bff", color: "white", border: "none" },
    secundario: { backgroundColor: "#6c757d", color: "white", border: "none" },
    peligro: { backgroundColor: "#dc3545", color: "white", border: "none" },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...estilos[variante],
        padding: "8px 16px",
        margin: "5px",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {texto}
    </button>
  );
}

export default BotonAccion;