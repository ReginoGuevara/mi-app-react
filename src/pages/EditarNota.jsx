import { useParams, useNavigate, Link } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";
import FormularioNota from "../components/FormularioNota";
import useNotification from "../hooks/useNotification";

function EditarNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, editarNota } = useNotas();
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

  const valoresIniciales = {
    titulo: nota.titulo,
    contenido: nota.contenido,
    categoria: nota.categoria,
    fijada: nota.fijada,
  };

  const handleSubmit = (datos) => {
    editarNota(id, datos);
    mostrar("Nota editada correctamente", "exito");
    navigate(`/notas/${id}`);
  };

  return (
    <div>
      <h2>Editar nota</h2>
      <FormularioNota valoresIniciales={valoresIniciales} onSubmit={handleSubmit} textoBoton="Guardar cambios" onCancelar={() => navigate(`/notas/${id}`)} />
    </div>
  );
}

export default EditarNota;