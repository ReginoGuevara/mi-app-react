function MensajeBienvenida() {
  // Cambiá entre null y un objeto para probar
  const usuario = null;
  // const usuario = { nombre: "Ana", rol: "admin" };
  // const usuario = { nombre: "Luis", rol: "usuario" };

  if (usuario === null) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
        <p>🔐 Por favor, inicia sesión para continuar</p>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      {usuario.rol === "admin" && <p>👑 Tienes acceso completo al sistema</p>}
    </div>
  );
}

export default MensajeBienvenida;