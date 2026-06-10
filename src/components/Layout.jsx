import { NavLink, Outlet } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";

function Layout() {
  const { notas } = useNotas();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ backgroundColor: "#2c3e50", color: "white", padding: "1rem" }}>
        <h1 style={{ margin: 0 }}>📝 MisNotas</h1>
        <nav style={{ marginTop: "0.5rem" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#f1c40f" : "white",
              marginRight: "1rem",
              textDecoration: "none",
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/notas"
            style={({ isActive }) => ({
              color: isActive ? "#f1c40f" : "white",
              marginRight: "1rem",
              textDecoration: "none",
            })}
          >
            Notas
          </NavLink>
          <NavLink
            to="/notas/nueva"
            style={({ isActive }) => ({
              color: isActive ? "#f1c40f" : "white",
              textDecoration: "none",
            })}
          >
            + Nueva Nota
          </NavLink>
        </nav>
        <div style={{ marginTop: "0.5rem", fontSize: "0.9em", color: "#bdc3c7" }}>
          Total de notas: {notas.length}
        </div>
      </header>

      <main style={{ flex: 1, padding: "1rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <Outlet />
      </main>

      <footer style={{ backgroundColor: "#34495e", color: "white", textAlign: "center", padding: "0.5rem", marginTop: "auto" }}>
        <p>© 2026 MisNotas - Programación Web Avanzada</p>
      </footer>
    </div>
  );
}

export default Layout;