import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotasProvider } from "./context/NotasProvider";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Notas from "./pages/Notas";
import NuevaNota from "./pages/NuevaNota";
import EditarNota from "./pages/EditarNota";
import DetalleNota from "./pages/DetalleNota";
import NoEncontrada from "./pages/NoEncontrada";

// Laboratorios anteriores
import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import Pedido from "./components/Pedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";
import Acordeon from "./components/Acordeon";
import Alerta from "./components/Alerta";
import Contador from "./components/Contador";
import ListaContactos from "./components/ListaContactos";
import FormularioEvento from "./components/FormularioEvento";
import VisorDocumento from "./components/VisorDocumento";
import TemporizadorPomodoro from "./components/TemporizadorPomodoro";
import ConfiguracionUsuario from "./components/ConfiguracionUsuario";
import DemoNotificaciones from "./components/DemoNotificaciones";

function App() {
  return (
    <NotasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="notas">
              <Route index element={<Notas />} />
              <Route path="nueva" element={<NuevaNota />} />
              <Route path=":id" element={<DetalleNota />} />
              <Route path=":id/editar" element={<EditarNota />} />
            </Route>
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px", borderTop: "3px solid #ccc", marginTop: "40px" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>📚 Laboratorios 2, 3 y 4</h1>

        <Acordeon titulo="Laboratorio 2 - Componentes Básicos">
          <Perfil />
          <Clima />
          <Pedido />
          <MensajeBienvenida />
          <ListaHabilidades />
          <ListaProductos />
          <ListaTareas />
          <Tarjeta />
          <Dashboard />
        </Acordeon>

        <Acordeon titulo="Laboratorio 3 - Props y Estado">
          <Alerta tipo="info">Ejemplo de alerta</Alerta>
          <Contador />
          <ListaContactos />
          <FormularioEvento />
        </Acordeon>

        <Acordeon titulo="Laboratorio 4 - useEffect y Custom Hooks">
          <VisorDocumento />
          <TemporizadorPomodoro />
          <ConfiguracionUsuario />
          <DemoNotificaciones />
        </Acordeon>
      </div>
    </NotasProvider>
  );
}

export default App;