import { Link } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";

function Notas() {
  const { notas, filtroCategoria, busqueda, cambiarFiltro, cambiarBusqueda, toggleFijada } = useNotas();

  const notasFiltradas = notas.filter((nota) => {
    const coincideCategoria = filtroCategoria === "todas" || nota.categoria === filtroCategoria;
    const coincideBusqueda =
      busqueda === "" ||
      nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      nota.contenido.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const notasOrdenadas = [...notasFiltradas].sort((a, b) => (b.fijada ? 1 : 0) - (a.fijada ? 1 : 0));

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString("es-ES");
  };

  const coloresCategoria = {
    personal: "#e74c3c",
    trabajo: "#2ecc71",
    estudio: "#9b59b6",
    ideas: "#1abc9c",
  };

  return (
    <div>
      <h2>Mis Notas</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="🔍 Buscar notas..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
        >
          <option value="todas">Todas las categorías</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <p>Mostrando {notasOrdenadas.length} de {notas.length} notas</p>

      {notasOrdenadas.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No hay notas que coincidan con los filtros.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
          {notasOrdenadas.map((nota) => (
            <div
              key={nota.id}
              style={{
                border: nota.fijada ? "2px solid #f39c12" : "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                backgroundColor: "white",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                <Link to={`/notas/${nota.id}`} style={{ textDecoration: "none", flex: 1 }}>
                  <h3 style={{ margin: 0, color: "#2c3e50" }}>{nota.titulo}</h3>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFijada(nota.id);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.2em",
                    color: nota.fijada ? "#f39c12" : "#bdc3c7",
                  }}
                >
                  📌
                </button>
              </div>

              <p style={{ color: "#666", fontSize: "0.9em", margin: "0.5rem 0" }}>
                {nota.contenido.length > 100 ? `${nota.contenido.substring(0, 100)}...` : nota.contenido}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                <span style={{ backgroundColor: coloresCategoria[nota.categoria], color: "white", padding: "0.2rem 0.5rem", borderRadius: "5px", fontSize: "0.8em" }}>
                  {nota.categoria}
                </span>
                <span style={{ color: "#999", fontSize: "0.8em" }}>{formatearFecha(nota.fechaCreacion)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notas;