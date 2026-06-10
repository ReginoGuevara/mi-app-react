import { useState } from "react";

// ========== LABORATORIO 2 ==========
import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import Pedido from "./components/Pedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";

// ========== LABORATORIO 3 ==========
import Acordeon from "./components/Acordeon";
import Alerta from "./components/Alerta";
import BotonAccion from "./components/BotonAccion";
import Modal from "./components/Modal";
import Contador from "./components/Contador";
import ListaContactos from "./components/ListaContactos";
import FormularioEvento from "./components/FormularioEvento";

// ========== LABORATORIO 4 ==========
import VisorDocumento from "./components/VisorDocumento";
import TemporizadorPomodoro from "./components/TemporizadorPomodoro";
import ConfiguracionUsuario from "./components/ConfiguracionUsuario";
import ConfiguracionUsuarioV2 from "./components/ConfiguracionUsuarioV2";
import DemoNotificaciones from "./components/DemoNotificaciones";

function App() {
  // Estado para controlar el desmontaje del VisorDocumento (Ejercicio 1 Lab 4)
  const [mostrarVisor, setMostrarVisor] = useState(true);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333", borderBottom: "3px solid #007bff", paddingBottom: "10px" }}>
        📚 Todos los Laboratorios - React
      </h1>

      {/* ============================================================ */}
      {/* LABORATORIO 2 - COMPONENTES BÁSICOS */}
      {/* ============================================================ */}
      <h2 style={{ backgroundColor: "#007bff", color: "white", padding: "10px", borderRadius: "5px", marginTop: "20px" }}>
        Laboratorio 2 - Componentes Básicos con JSX
      </h2>

      <Acordeon titulo="Ejercicio 1: Perfil">
        <Perfil />
      </Acordeon>

      <Acordeon titulo="Ejercicio 2: Clima">
        <Clima />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3: Pedido">
        <Pedido />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4: Mensaje de bienvenida">
        <MensajeBienvenida />
      </Acordeon>

      <Acordeon titulo="Ejercicio 5: Habilidades técnicas">
        <ListaHabilidades />
      </Acordeon>

      <Acordeon titulo="Ejercicio 6: Productos">
        <ListaProductos />
      </Acordeon>

      <Acordeon titulo="Ejercicio 7: Tareas">
        <ListaTareas />
      </Acordeon>

      <Acordeon titulo="Ejercicio 8: Tarjeta destacada">
        <Tarjeta />
      </Acordeon>

      <Acordeon titulo="Ejercicio 9: Dashboard">
        <Dashboard />
      </Acordeon>

      {/* ============================================================ */}
      {/* LABORATORIO 3 - PROPS, ESTADO Y FORMULARIOS */}
      {/* ============================================================ */}
      <h2 style={{ backgroundColor: "#28a745", color: "white", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
        Laboratorio 3 - Props, Estado y Formularios
      </h2>

      <Acordeon titulo="Ejercicio 1: Alerta (componente reutilizable)">
        <Alerta tipo="exito" titulo="Éxito">Operación completada correctamente</Alerta>
        <Alerta tipo="advertencia" titulo="Advertencia">Revisá los datos antes de continuar</Alerta>
        <Alerta tipo="error" titulo="Error">Hubo un problema al guardar</Alerta>
        <Alerta tipo="info">Este es un mensaje informativo</Alerta>
      </Acordeon>

      <Acordeon titulo="Ejercicio 1 y 2: Modal + Botones">
        <EjemploModalYBoton />
      </Acordeon>

      <Acordeon titulo="Ejercicio 2: Contador con validación">
        <Contador />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3: Lista de contactos (CRUD)">
        <ListaContactos />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4: Formulario de evento">
        <FormularioEvento />
      </Acordeon>

      {/* ============================================================ */}
      {/* LABORATORIO 4 - EFFECTS Y CUSTOM HOOKS */}
      {/* ============================================================ */}
      <h2 style={{ backgroundColor: "#ffc107", color: "#333", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
        Laboratorio 4 - useEffect y Custom Hooks
      </h2>

      <Acordeon titulo="Ejercicio 1: Visor de Documento (cambia título de pestaña)">
        {mostrarVisor ? (
          <>
            <VisorDocumento onDesmontar={() => console.log("Visor desmontado")} />
            <button
              onClick={() => setMostrarVisor(false)}
              style={{ marginTop: "10px", padding: "8px 16px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              🗑️ Simular desmontaje (ocultar componente)
            </button>
          </>
        ) : (
          <div>
            <Alerta tipo="info">El componente VisorDocumento fue desmontado. El título volvió a "Mi App".</Alerta>
            <button
              onClick={() => setMostrarVisor(true)}
              style={{ marginTop: "10px", padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              🔄 Volver a montar componente
            </button>
          </div>
        )}
      </Acordeon>

      <Acordeon titulo="Ejercicio 2: Temporizador Pomodoro">
        <TemporizadorPomodoro />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3: Configuración con localStorage (manual)">
        <ConfiguracionUsuario />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4: Configuración con useLocalStorage (custom hook)">
        <ConfiguracionUsuarioV2 />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4: Demo de Notificaciones (useNotification)">
        <DemoNotificaciones />
      </Acordeon>
    </div>
  );
}

// Componente auxiliar para el ejemplo de Modal (Lab 3)
function EjemploModalYBoton() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <p>Este es un ejemplo de cómo usar <strong>Modal</strong> y <strong>BotonAccion</strong> juntos:</p>
      <BotonAccion texto="Abrir modal de ejemplo" variante="primario" onClick={() => setModalAbierto(true)} />
      <Modal titulo="📦 Ejemplo de Modal" abierto={modalAbierto}>
        <p>Este es un modal reutilizable que puede contener cualquier contenido.</p>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "15px" }}>
          <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalAbierto(false)} />
        </div>
      </Modal>
    </>
  );
}

export default App;