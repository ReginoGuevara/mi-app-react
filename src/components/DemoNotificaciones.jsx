import useNotification from "../hooks/useNotification";

function DemoNotificaciones() {
  const { notificacion, mostrar } = useNotification(3000);

  const estilos = {
    info: { backgroundColor: "#d1ecf1", color: "#0c5460", borderLeft: "4px solid #17a2b8" },
    exito: { backgroundColor: "#d4edda", color: "#155724", borderLeft: "4px solid #28a745" },
    advertencia: { backgroundColor: "#fff3cd", color: "#856404", borderLeft: "4px solid #ffc107" },
    error: { backgroundColor: "#f8d7da", color: "#721c24", borderLeft: "4px solid #dc3545" },
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0" }}>
      <h3>🔔 Demo de Notificaciones (Custom Hook)</h3>

      {notificacion && (
        <div style={{ ...estilos[notificacion.tipo], padding: "10px", marginBottom: "15px", borderRadius: "5px" }}>
          {notificacion.mensaje}
        </div>
      )}

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => mostrar("✅ Operación exitosa", "exito")} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Notificación de éxito
        </button>
        <button onClick={() => mostrar("⚠️ Esto es una advertencia", "advertencia")} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Notificación de advertencia
        </button>
        <button onClick={() => mostrar("❌ Ocurrió un error", "error")} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Notificación de error
        </button>
        <button onClick={() => mostrar("ℹ️ Información importante", "info")} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Notificación de info
        </button>
      </div>
    </div>
  );
}

export default DemoNotificaciones;