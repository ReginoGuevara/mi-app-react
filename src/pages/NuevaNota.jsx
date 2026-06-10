import { useNavigate } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";
import FormularioNota from "../components/FormularioNota";
import useNotification from "../hooks/useNotification";

function NuevaNota() {
  const navigate = useNavigate();
  const { agregarNota } = useNotas();
  const { mostrar } = useNotification(3000);

  const valoresIniciales = {
    titulo: "",
    contenido: "",
    categoria: "personal",
    fijada: false,
  };

  const handleSubmit = (datos) => {
    const nuevaNota = {
      ...datos,
      id: Date.now().toString(),
      fechaCreacion: new Date().toISOString(),
    };
    agregarNota(nuevaNota);
    mostrar("Nota creada correctamente", "exito");
    navigate("/notas");
  };

  return (
    <div>
      <h2>Crear nueva nota</h2>
      <FormularioNota valoresIniciales={valoresIniciales} onSubmit={handleSubmit} textoBoton="Crear nota" onCancelar={() => navigate("/notas")} />
    </div>
  );
}

export default NuevaNota;