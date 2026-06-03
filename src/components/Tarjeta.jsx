function Tarjeta() {
  const datos = {
    titulo: "React Avanzado",
    descripcion: "Aprende a construir aplicaciones modernas con React y Vite",
    etiquetas: ["React", "JSX", "Componentes"],
    destacado: true,
  };

  return (
    <div
      style={{
        border: datos.destacado ? "2px solid #ff6347" : "1px solid #ccc",
        backgroundColor: datos.destacado ? "#fff5f0" : "white",
        borderRadius: "12px",
        padding: "20px",
        margin: "10px 0",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{datos.titulo}</h3>
      <p>{datos.descripcion}</p>
      <div>
        {datos.etiquetas.map((etiqueta, index) => (
          <span
            key={index}
            style={{
              background: "#007bff",
              color: "white",
              borderRadius: "20px",
              padding: "5px 10px",
              margin: "0 5px 0 0",
              fontSize: "0.8em",
              display: "inline-block",
            }}
          >
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tarjeta;