import { Link } from "react-router-dom";

function NoEncontrada() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1 style={{ fontSize: "4em", margin: 0, color: "#e74c3c" }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que buscás no existe o fue movida.</p>
      <Link to="/" style={{ color: "#3498db", textDecoration: "none" }}>← Volver al inicio</Link>
    </div>
  );
}

export default NoEncontrada;