import { useState, useEffect, useRef } from "react";

function TemporizadorPomodoro() {
  const [tiempo, setTiempo] = useState(1500); // 25 minutos = 1500 segundos
  const [activo, setActivo] = useState(false);
  const intervaloRef = useRef(null);

  // Efecto separado para manejar el intervalo
  useEffect(() => {
    if (activo && tiempo > 0) {
      // Solo crear el intervalo si está activo y tiempo > 0
      intervaloRef.current = setInterval(() => {
        setTiempo((prevTiempo) => {
          if (prevTiempo <= 1) {
            // Si va a llegar a 0, detener el temporizador
            setActivo(false);
            return 0;
          }
          return prevTiempo - 1;
        });
      }, 1000);
    }

    // Función de limpieza: eliminar el intervalo
    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
        intervaloRef.current = null;
      }
    };
  }, [activo, tiempo]); // Dependencias: activo y tiempo

  // Efecto separado para manejar cuando tiempo llega a 0
  useEffect(() => {
    if (tiempo === 0 && activo === false) {
      alert("⏰ ¡Tiempo completado! 🎉");
    }
  }, [tiempo, activo]);

  const formatearTiempo = () => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    return `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  };

  const iniciar = () => {
    if (tiempo > 0) {
      setActivo(true);
    }
  };

  const pausar = () => {
    setActivo(false);
  };

  const reiniciar = () => {
    setActivo(false);
    setTiempo(1500);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0", textAlign: "center" }}>
      <h3>🍅 Temporizador Pomodoro</h3>
      <p style={{ fontSize: "3em", fontWeight: "bold", fontFamily: "monospace" }}>{formatearTiempo()}</p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={iniciar}
          disabled={activo || tiempo === 0}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: (activo || tiempo === 0) ? "not-allowed" : "pointer",
            opacity: (activo || tiempo === 0) ? 0.6 : 1,
          }}
        >
          ▶ Iniciar
        </button>
        <button
          onClick={pausar}
          disabled={!activo}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ffc107",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: !activo ? "not-allowed" : "pointer",
            opacity: !activo ? 0.6 : 1,
          }}
        >
          ⏸ Pausar
        </button>
        <button
          onClick={reiniciar}
          style={{
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🔄 Reiniciar
        </button>
      </div>
      <p style={{ fontSize: "0.8em", color: "#666", marginTop: "10px" }}>
        {activo ? "⏳ Temporizador en marcha..." : tiempo === 0 ? "✅ Tiempo completado" : "⏸ Pausado"}
      </p>
    </div>
  );
}

export default TemporizadorPomodoro;