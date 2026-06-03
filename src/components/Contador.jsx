import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";

function Contador() {
  const [valor, setValor] = useState(0);

  const decrementar = () => {
    setValor((prev) => prev - 1);
  };

  const incrementar = () => {
    setValor((prev) => prev + 1);
  };

  const incrementarCinco = () => {
    setValor((prev) => prev + 5);
  };

  const reiniciar = () => {
    setValor(0);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0" }}>
      <h2>Contador: {valor}</h2>

      <BotonAccion texto="-1" variante="secundario" onClick={decrementar} disabled={valor === 0} />
      <BotonAccion texto="+1" variante="primario" onClick={incrementar} />
      <BotonAccion texto="+5" variante="primario" onClick={incrementarCinco} />
      <BotonAccion texto="Reiniciar" variante="peligro" onClick={reiniciar} />

      {valor === 0 && <Alerta tipo="info" titulo="Info">El contador está en cero</Alerta>}
      {valor > 10 && <Alerta tipo="advertencia" titulo="Advertencia">¡Valor alto! ({valor})</Alerta>}
    </div>
  );
}

export default Contador;