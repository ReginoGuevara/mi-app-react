import { useParams, Link, useNavigate } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";
import useNotification from "../hooks/useNotification";

function DetalleNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, eliminarNota, toggleFijada } = useNotas();
  const { mostrar } = useNotification(3000);

  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Nota no encontrada</h2>
        <Link to="/notas">← Volver a notas</Link>
      </div>
    );
  }

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const coloresCategoria = {
    personal: "#e74c3c",
    trabajo: "#2ecc71",
    estudio: "#9b59b6",
    ideas: "#1abc9c",
  };

  const handleEliminar = () => {
    if (window.confirm("¿Estás seguro de eliminar esta nota?")) {
      eliminarNota(nota.id);
      mostrar("Nota eliminada correctamente", "exito");
      navigate("/notas");
    }
  };

  return (
    <div>
      <Link to="/notas" style={{ color: "#3498db", textDecoration: "none" }}>← Volver a notas</Link>

      <div style={{ border: nota.fijada ? "2px solid #f39c12" : "1px solid #ddd", borderRadius: "8px", padding: "1.5rem", marginTop: "1rem", backgroundColor: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h1 style={{ margin: 0 }}>{nota.titulo}</h1>
          <button onClick={() => toggleFijada(nota.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5em", color: nota.fijada ? "#f39c12" : "#bdc3c7" }}>
            📌
          </button>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: coloresCategoria[nota.categoria], color: "white", padding: "0.3rem 0.8rem", borderRadius: "5px", fontSize: "0.9em" }}>
            {nota.categoria}
          </span>
          <span style={{ color: "#666", fontSize: "0.9em" }}>📅 {formatearFecha(nota.fechaCreacion)}</span>
        </div>

        <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.6, marginBottom: "2rem" }}>{nota.contenido}</div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to={`/notas/${nota.id}/editar`} style={{ backgroundColor: "#3498db", color: "white", padding: "0.5rem 1rem", textDecoration: "none", borderRadius: "5px" }}>
            ✏️ Editar
          </Link>
          <button onClick={handleEliminar} style={{ backgroundColor: "#e74c3c", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            🗑️ Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleNota;