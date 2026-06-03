function Perfil() {
  const nombre = "Juan Pérez";
  const profesion = "Desarrollador Frontend";
  const experiencia = 5;
  const disponible = true;

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
      <h2>{nombre}</h2>
      <p>Profesión: {profesion}</p>
      <p>{experiencia} años de experiencia</p>
      <p>{disponible ? "Disponible para contratar ✅" : "No disponible ❌"}</p>
    </div>
  );
}

export default Perfil;