import { useNotas } from "../hooks/useNotas";

function Inicio() {
  const { notas } = useNotas();

  const notasFijadas = notas.filter((n) => n.fijada).length;
  const porCategoria = {
    personal: notas.filter((n) => n.categoria === "personal").length,
    trabajo: notas.filter((n) => n.categoria === "trabajo").length,
    estudio: notas.filter((n) => n.categoria === "estudio").length,
    ideas: notas.filter((n) => n.categoria === "ideas").length,
  };

  return (
    <div>
      <h2>Bienvenido a MisNotas</h2>
      <p>Organizá tus ideas, tareas y proyectos de manera sencilla.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
        <div style={{ backgroundColor: "#3498db", color: "white", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
          <h3>Total de notas</h3>
          <p style={{ fontSize: "2em", margin: 0 }}>{notas.length}</p>
        </div>
        <div style={{ backgroundColor: "#f39c12", color: "white", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
          <h3>Notas fijadas</h3>
          <p style={{ fontSize: "2em", margin: 0 }}>{notasFijadas}</p>
        </div>
      </div>

      <h3 style={{ marginTop: "2rem" }}>Notas por categoría</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.5rem" }}>
        <div style={{ backgroundColor: "#e74c3c", color: "white", padding: "0.5rem", borderRadius: "5px", textAlign: "center" }}>Personal: {porCategoria.personal}</div>
        <div style={{ backgroundColor: "#2ecc71", color: "white", padding: "0.5rem", borderRadius: "5px", textAlign: "center" }}>Trabajo: {porCategoria.trabajo}</div>
        <div style={{ backgroundColor: "#9b59b6", color: "white", padding: "0.5rem", borderRadius: "5px", textAlign: "center" }}>Estudio: {porCategoria.estudio}</div>
        <div style={{ backgroundColor: "#1abc9c", color: "white", padding: "0.5rem", borderRadius: "5px", textAlign: "center" }}>Ideas: {porCategoria.ideas}</div>
      </div>
    </div>
  );
}

export default Inicio;