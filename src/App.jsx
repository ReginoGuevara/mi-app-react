import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import Pedido from "./components/Pedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";

// Nuevos imports del Laboratorio 3
import Acordeon from "./components/Acordeon";
import Alerta from "./components/Alerta";
import BotonAccion from "./components/BotonAccion";
import Modal from "./components/Modal";
import Contador from "./components/Contador";
import ListaContactos from "./components/ListaContactos";
import FormularioEvento from "./components/FormularioEvento";
import { useState } from "react";

function App() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>📚 Todos los Laboratorios - React</h1>

      {/* ========== LABORATORIO 2 ========== */}
      <h2 style={{ backgroundColor: "#007bff", color: "white", padding: "10px", borderRadius: "5px" }}>
        Laboratorio 2 - Componentes Básicos
      </h2>

      <section>
        <h3>Ejercicio 1: Perfil</h3>
        <Perfil />
      </section>

      <section>
        <h3>Ejercicio 2: Clima</h3>
        <Clima />
      </section>

      <section>
        <h3>Ejercicio 3: Pedido</h3>
        <Pedido />
      </section>

      <section>
        <h3>Ejercicio 4: Mensaje de bienvenida</h3>
        <MensajeBienvenida />
      </section>

      <section>
        <h3>Ejercicio 5: Habilidades técnicas</h3>
        <ListaHabilidades />
      </section>

      <section>
        <h3>Ejercicio 6: Productos</h3>
        <ListaProductos />
      </section>

      <section>
        <h3>Ejercicio 7: Tareas</h3>
        <ListaTareas />
      </section>

      <section>
        <h3>Ejercicio 8: Tarjeta destacada</h3>
        <Tarjeta />
      </section>

      <section>
        <h3>Ejercicio 9: Dashboard</h3>
        <Dashboard />
      </section>

      {/* ========== LABORATORIO 3 ========== */}
      <h2 style={{ backgroundColor: "#28a745", color: "white", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
        Laboratorio 3 - Props, Estado y Formularios
      </h2>

      <Acordeon titulo="📢 Componente Alerta" defaultExpandido={true}>
        <Alerta tipo="exito" titulo="Éxito">Operación completada</Alerta>
        <Alerta tipo="advertencia" titulo="Cuidado">Revisá los datos</Alerta>
        <Alerta tipo="error" titulo="Error">Hubo un problema</Alerta>
        <Alerta tipo="info">Mensaje informativo</Alerta>
      </Acordeon>

      <Acordeon titulo="🔘 Modal y BotonAccion">
        <EjemploModalYBoton />
      </Acordeon>

      <Acordeon titulo="🔢 Contador">
        <Contador />
      </Acordeon>

      <Acordeon titulo="📒 Lista de contactos">
        <ListaContactos />
      </Acordeon>

      <Acordeon titulo="📝 Formulario de evento">
        <FormularioEvento />
      </Acordeon>
    </div>
  );
}

// Componente auxiliar para el ejemplo de Modal
function EjemploModalYBoton() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <BotonAccion texto="Abrir modal" variante="primario" onClick={() => setModalAbierto(true)} />
      <Modal titulo="Ejemplo" abierto={modalAbierto}>
        <p>Contenido del modal</p>
        <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalAbierto(false)} />
      </Modal>
    </>
  );
}

export default App;