function Dashboard() {
  const usuario = {
    nombre: "María López",
    email: "maria@example.com",
    rol: "Editor",
  };

  const notificaciones = [
    { id: 1, mensaje: "Tienes un nuevo mensaje", leida: false },
    { id: 2, mensaje: "Tu artículo fue publicado", leida: true },
    { id: 3, mensaje: "Recordatorio: reunión a las 15hs", leida: false },
    { id: 4, mensaje: "Actualización del sistema", leida: true },
  ];

  const actividadReciente = [
    { id: 1, accion: "Inició sesión", fecha: "2024-01-15" },
    { id: 2, accion: "Editó un perfil", fecha: "2024-01-14" },
    { id: 3, accion: "Subió un archivo", fecha: "2024-01-13" },
  ];

  const noLeidas = notificaciones.filter((n) => !n.leida).length;

  return (
    <>
      <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
        <h3>👤 Información del usuario</h3>
        <p>
          <strong>Nombre:</strong> {usuario.nombre}
        </p>
        <p>
          <strong>Email:</strong> {usuario.email}
        </p>
        <p>
          <strong>Rol:</strong> {usuario.rol}
        </p>
      </div>

      <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
        <h3>
          🔔 Notificaciones ({noLeidas} no leídas)
        </h3>
        {notificaciones.length === 0 ? (
          <p>No hay notificaciones</p>
        ) : (
          <ul>
            {notificaciones.map((notif) => (
              <li
                key={notif.id}
                style={{
                  fontWeight: notif.leida ? "normal" : "bold",
                  opacity: notif.leida ? 0.6 : 1,
                }}
              >
                {notif.mensaje} {!notif.leida && "🔴"}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
        <h3>🕒 Actividad reciente</h3>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((act) => (
              <li key={act.id}>
                {act.accion} - <small>{act.fecha}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dashboard;