import { useState } from "react";

function FormularioNota({ valoresIniciales, onSubmit, textoBoton, onCancelar }) {
  const [formulario, setFormulario] = useState(
    valoresIniciales || {
      titulo: "",
      contenido: "",
      categoria: "personal",
      fijada: false,
    }
  );
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    if (formulario.titulo.length < 3) nuevosErrores.titulo = "El título debe tener al menos 3 caracteres";
    if (formulario.contenido.length < 10) nuevosErrores.contenido = "El contenido debe tener al menos 10 caracteres";
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      onSubmit(formulario);
    }
  };

  const camposInvalidos = formulario.titulo.length < 3 || formulario.contenido.length < 10;

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Título *</label>
        <input
          type="text"
          name="titulo"
          value={formulario.titulo}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        {errores.titulo && <p style={{ color: "#e74c3c", fontSize: "0.8em", marginTop: "0.2rem" }}>{errores.titulo}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Contenido *</label>
        <textarea
          name="contenido"
          value={formulario.contenido}
          onChange={handleChange}
          rows="6"
          style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        {errores.contenido && <p style={{ color: "#e74c3c", fontSize: "0.8em", marginTop: "0.2rem" }}>{errores.contenido}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Categoría</label>
        <select
          name="categoria"
          value={formulario.categoria}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
        >
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          <input type="checkbox" name="fijada" checked={formulario.fijada} onChange={handleChange} />
          Fijar nota al inicio
        </label>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          type="submit"
          disabled={camposInvalidos}
          style={{
            backgroundColor: camposInvalidos ? "#bdc3c7" : "#2ecc71",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor: camposInvalidos ? "not-allowed" : "pointer",
          }}
        >
          {textoBoton}
        </button>
        {onCancelar && (
          <button
            type="button"
            onClick={onCancelar}
            style={{
              backgroundColor: "#95a5a6",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default FormularioNota;