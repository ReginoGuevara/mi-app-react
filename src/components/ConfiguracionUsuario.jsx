import { useState, useEffect } from "react";

function ConfiguracionUsuario() {
  // Leer desde localStorage al iniciar
  const leerConfiguracionInicial = () => {
    try {
      const guardada = localStorage.getItem("config-usuario");
      if (guardada) {
        return JSON.parse(guardada);
      }
    } catch (error) {
      console.error("Error al leer localStorage:", error);
    }
    return { nombre: "", tema: "claro", notificaciones: true };
  };

  const [config, setConfig] = useState(leerConfiguracionInicial);

  // Guardar en localStorage cada vez que cambia la configuración
  useEffect(() => {
    localStorage.setItem("config-usuario", JSON.stringify(config));
  }, [config]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const restablecer = () => {
    localStorage.removeItem("config-usuario");
    setConfig({ nombre: "", tema: "claro", notificaciones: true });
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0" }}>
      <h3>⚙️ Configuración de Usuario</h3>

      <div style={{ marginBottom: "10px" }}>
        <label>Nombre: </label>
        <input type="text" name="nombre" value={config.nombre} onChange={handleChange} style={{ padding: "5px", marginLeft: "10px" }} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Tema: </label>
        <select name="tema" value={config.tema} onChange={handleChange} style={{ padding: "5px", marginLeft: "10px" }}>
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          <input type="checkbox" name="notificaciones" checked={config.notificaciones} onChange={handleChange} />
          Activar notificaciones
        </label>
      </div>

      <button onClick={restablecer} style={{ padding: "8px 16px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Restablecer valores
      </button>

      <div style={{ marginTop: "15px", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
        <strong>Vista previa de configuración guardada:</strong>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ConfiguracionUsuario;