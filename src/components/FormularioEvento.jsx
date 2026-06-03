import { useState } from "react";
import Alerta from "./Alerta";
import BotonAccion from "./BotonAccion";

function FormularioEvento() {
  const [formulario, setFormulario] = useState({
    titulo: "",
    fecha: "",
    categoria: "",
    descripcion: "",
    esPublico: false,
  });

  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validar = () => {
    const nuevosErrores = {};
    if (formulario.titulo.length < 5) nuevosErrores.titulo = "El título debe tener al menos 5 caracteres";
    if (!formulario.fecha) nuevosErrores.fecha = "La fecha es obligatoria";
    else if (new Date(formulario.fecha) < new Date()) nuevosErrores.fecha = "La fecha no puede ser pasada";
    if (!formulario.categoria) nuevosErrores.categoria = "Debe seleccionar una categoría";
    if (formulario.descripcion.length < 20) nuevosErrores.descripcion = "La descripción debe tener al menos 20 caracteres";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setMensajeExito(`✅ Evento "${formulario.titulo}" registrado con éxito`);
      setFormulario({
        titulo: "",
        fecha: "",
        categoria: "",
        descripcion: "",
        esPublico: false,
      });
      setTimeout(() => setMensajeExito(""), 4000);
    }
  };

  const camposIncompletos = !formulario.titulo || !formulario.fecha || !formulario.categoria || formulario.descripcion.length < 20;

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0" }}>
      <h2>📝 Registrar Evento</h2>

      {mensajeExito && <Alerta tipo="exito" titulo="Éxito">{mensajeExito}</Alerta>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" name="titulo" value={formulario.titulo} onChange={handleChange} style={{ width: "100%", padding: "5px", margin: "5px 0" }} />
          {errores.titulo && <Alerta tipo="error">{errores.titulo}</Alerta>}
        </div>

        <div>
          <label>Fecha:</label>
          <input type="date" name="fecha" value={formulario.fecha} onChange={handleChange} style={{ width: "100%", padding: "5px", margin: "5px 0" }} />
          {errores.fecha && <Alerta tipo="error">{errores.fecha}</Alerta>}
        </div>

        <div>
          <label>Categoría:</label>
          <select name="categoria" value={formulario.categoria} onChange={handleChange} style={{ width: "100%", padding: "5px", margin: "5px 0" }}>
            <option value="">Seleccionar...</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
          {errores.categoria && <Alerta tipo="error">{errores.categoria}</Alerta>}
        </div>

        <div>
          <label>Descripción:</label>
          <textarea name="descripcion" value={formulario.descripcion} onChange={handleChange} rows="3" style={{ width: "100%", padding: "5px", margin: "5px 0" }} />
          {errores.descripcion && <Alerta tipo="error">{errores.descripcion}</Alerta>}
        </div>

        <div>
          <label>
            <input type="checkbox" name="esPublico" checked={formulario.esPublico} onChange={handleChange} />
            Evento público
          </label>
        </div>

        <BotonAccion texto="Registrar evento" variante="primario" type="submit" disabled={camposIncompletos} />
      </form>
    </div>
  );
}

export default FormularioEvento;