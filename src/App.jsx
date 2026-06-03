import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import Pedido from "./components/Pedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Laboratorio 2 - React Components</h1>

      <section>
        <h2>Ejercicio 1: Perfil</h2>
        <Perfil />
      </section>

      <section>
        <h2>Ejercicio 2: Clima</h2>
        <Clima />
      </section>

      <section>
        <h2>Ejercicio 3: Pedido</h2>
        <Pedido />
      </section>

      <section>
        <h2>Ejercicio 4: Mensaje de bienvenida</h2>
        <MensajeBienvenida />
      </section>

      <section>
        <h2>Ejercicio 5: Habilidades técnicas</h2>
        <ListaHabilidades />
      </section>

      <section>
        <h2>Ejercicio 6: Productos</h2>
        <ListaProductos />
      </section>

      <section>
        <h2>Ejercicio 7: Tareas</h2>
        <ListaTareas />
      </section>

      <section>
        <h2>Ejercicio 8: Tarjeta destacada</h2>
        <Tarjeta />
      </section>

      <section>
        <h2>Ejercicio 9: Dashboard</h2>
        <Dashboard />
      </section>
    </div>
  );
}

export default App;