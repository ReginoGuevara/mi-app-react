function Alerta({ tipo = "info", titulo, children }) {
  const config = {
    exito: { icono: "✅", colorFondo: "#d4edda", colorBorde: "#28a745" },
    advertencia: { icono: "⚠️", colorFondo: "#fff3cd", colorBorde: "#ffc107" },
    error: { icono: "❌", colorFondo: "#f8d7da", colorBorde: "#dc3545" },
    info: { icono: "ℹ️", colorFondo: "#d1ecf1", colorBorde: "#17a2b8" },
  };

  const { icono, colorFondo, colorBorde } = config[tipo];

  return (
    <div
      style={{
        backgroundColor: colorFondo,
        borderLeft: `5px solid ${colorBorde}`,
        padding: "12px 15px",
        margin: "10px 0",
        borderRadius: "5px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.1em" }}>
        {icono} {titulo || tipo.toUpperCase()}
      </div>
      <div style={{ marginTop: "8px" }}>{children}</div>
    </div>
  );
}

export default Alerta;