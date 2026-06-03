function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Hacer ejercicio", completada: true, prioridad: "media" },
    { id: 3, titulo: "Comprar comida", completada: false, prioridad: "baja" },
    { id: 4, titulo: "Leer un libro", completada: false, prioridad: "alta" },
    { id: 5, titulo: "Lavar la ropa", completada: true, prioridad: "media" },
    { id: 6, titulo: "Pagar facturas", completada: false, prioridad: "alta" },
    { id: 7, titulo: "Llamar a mamá", completada: true, prioridad: "baja" },
  ];

  const pendientes = tareas.filter((tarea) => !tarea.completada);
  const completadas = tareas.filter((tarea) => tarea.completada);

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
      <h3>Lista de tareas</h3>

      <div>
        <h4>📋 Tareas pendientes ({pendientes.length})</h4>
        {pendientes.length === 0 ? (
          <p>No hay tareas pendientes ✅</p>
        ) : (
          <ul>
            {pendientes.map((tarea) => (
              <li
                key={tarea.id}
                style={{ fontWeight: tarea.prioridad === "alta" ? "bold" : "normal", color: tarea.prioridad === "alta" ? "red" : "black" }}
              >
                {tarea.titulo} <span style={{ fontSize: "0.8em", background: "#eee", padding: "2px 5px", borderRadius: "10px" }}>{tarea.prioridad}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h4>✅ Tareas completadas ({completadas.length})</h4>
        {completadas.length === 0 ? (
          <p>No hay tareas completadas</p>
        ) : (
          <ul>
            {completadas.map((tarea) => (
              <li key={tarea.id} style={{ textDecoration: "line-through", opacity: 0.7 }}>
                {tarea.titulo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListaTareas;