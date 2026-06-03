function Clima() {
  const temperatura = 28;

  const obtenerInfo = () => {
    if (temperatura < 15) {
      return { sensacion: "frío", recomendacion: "Lleva abrigo 🧥" };
    } else if (temperatura >= 15 && temperatura <= 25) {
      return { sensacion: "agradable", recomendacion: "Disfruta el día ☀️" };
    } else {
      return { sensacion: "caluroso", recomendacion: "Mantente hidratado 💧" };
    }
  };

  const { sensacion, recomendacion } = obtenerInfo();

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
      <h3>Clima actual</h3>
      <p><strong>Temperatura:</strong> {temperatura}°C</p>
      <p><strong>Sensación térmica:</strong> {sensacion}</p>
      <p><strong>Recomendación:</strong> {recomendacion}</p>
    </div>
  );
}

export default Clima;