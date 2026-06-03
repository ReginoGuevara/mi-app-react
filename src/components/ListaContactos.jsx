import { useState } from "react";
import Alerta from "./Alerta";
import Modal from "./Modal";
import BotonAccion from "./BotonAccion";

const contactosIniciales = [
  { id: 1, nombre: "Juan Pérez", telefono: "123456789", favorito: true },
  { id: 2, nombre: "María López", telefono: "987654321", favorito: false },
  { id: 3, nombre: "Carlos Gómez", telefono: "555123456", favorito: true },
  { id: 4, nombre: "Ana Martínez", telefono: "444987654", favorito: false },
  { id: 5, nombre: "Luis Fernández", telefono: "333456789", favorito: true },
];

function ListaContactos() {
  const [contactos, setContactos] = useState(contactosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  const toggleFavorito = (id) => {
    setContactos((prevContactos) =>
      prevContactos.map((contacto) =>
        contacto.id === id ? { ...contacto, favorito: !contacto.favorito } : contacto
      )
    );
  };

  const eliminarContacto = () => {
    setContactos((prevContactos) =>
      prevContactos.filter((contacto) => contacto.id !== contactoAEliminar.id)
    );
    setModalAbierto(false);
    setContactoAEliminar(null);
  };

  const abrirModalEliminar = (contacto) => {
    setContactoAEliminar(contacto);
    setModalAbierto(true);
  };

  const contactosFiltrados = contactos.filter((contacto) => {
    const coincideBusqueda =
      contacto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      contacto.telefono.includes(busqueda);
    const coincideFavorito = mostrarFavoritos ? contacto.favorito : true;
    return coincideBusqueda && coincideFavorito;
  });

  const totalFavoritos = contactos.filter((c) => c.favorito).length;

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0" }}>
      <h2>📒 Lista de Contactos</h2>

      <input
        type="text"
        placeholder="🔍 Buscar por nombre o teléfono..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ width: "100%", padding: "8px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }}
      />

      <div style={{ margin: "10px 0" }}>
        <BotonAccion texto="Mostrar todos" variante="secundario" onClick={() => setMostrarFavoritos(false)} />
        <BotonAccion texto="Mostrar favoritos" variante="primario" onClick={() => setMostrarFavoritos(true)} />
      </div>

      <p>
        <strong>Favoritos:</strong> {totalFavoritos} / {contactos.length} &nbsp;|&nbsp;
        <strong>Resultados:</strong> {contactosFiltrados.length}
      </p>

      {contactosFiltrados.length === 0 ? (
        <Alerta tipo="info">No se encontraron contactos</Alerta>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {contactosFiltrados.map((contacto) => (
            <li key={contacto.id} style={{ borderBottom: "1px solid #eee", padding: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong>{contacto.nombre}</strong> - {contacto.telefono}
                <span onClick={() => toggleFavorito(contacto.id)} style={{ marginLeft: "10px", cursor: "pointer", fontSize: "1.5em" }}>
                  {contacto.favorito ? "⭐" : "☆"}
                </span>
              </div>
              <BotonAccion texto="Eliminar" variante="peligro" onClick={() => abrirModalEliminar(contacto)} />
            </li>
          ))}
        </ul>
      )}

      <Modal titulo="Confirmar eliminación" abierto={modalAbierto}>
        <p>¿Estás seguro de eliminar a <strong>{contactoAEliminar?.nombre}</strong>?</p>
        <BotonAccion texto="Cancelar" variante="secundario" onClick={() => setModalAbierto(false)} />
        <BotonAccion texto="Eliminar" variante="peligro" onClick={eliminarContacto} />
      </Modal>
    </div>
  );
}

export default ListaContactos;