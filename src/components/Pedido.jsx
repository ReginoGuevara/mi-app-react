function Pedido() {
  const estado = "enviado"; // Probá: 'pendiente', 'enviado', 'entregado', 'cancelado'

  let icono = "";
  let mensaje = "";

  if (estado === "pendiente") {
    icono = "⏳";
    mensaje = "Tu pedido está siendo procesado";
  } else if (estado === "enviado") {
    icono = "🚚";
    mensaje = "Tu pedido está en camino";
  } else if (estado === "entregado") {
    icono = "✅";
    mensaje = "Tu pedido ha sido entregado";
  } else if (estado === "cancelado") {
    icono = "❌";
    mensaje = "Tu pedido fue cancelado";
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
      <h3>Estado del pedido</h3>
      <p>
        {icono} {mensaje}
      </p>
      {estado === "enviado" && (
        <p style={{ color: "blue" }}>📦 Tiempo estimado de entrega: 2-3 días hábiles</p>
      )}
    </div>
  );
}

export default Pedido;