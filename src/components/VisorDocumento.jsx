import { useState, useEffect } from "react";

function VisorDocumento({ onDesmontar }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = `Contador: ${contador} - Mi App`;

    // Función de limpieza: se ejecuta cuando el componente se desmonta
    return () => {
      document.title = "Mi App";
      if (onDesmontar) onDesmontar();
    };
  }, [contador, onDesmontar]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0" }}>
      <h3>📄 Visor de Documento</h3>
      <p style={{ fontSize: "2em", fontWeight: "bold", textAlign: "center" }}>{contador}</p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => setContador(contador - 1)} style={{ padding: "8px 16px", cursor: "pointer" }}>
          ➖ Decrementar
        </button>
        <button onClick={() => setContador(contador + 1)} style={{ padding: "8px 16px", cursor: "pointer" }}>
          ➕ Incrementar
        </button>
      </div>
      <p style={{ fontSize: "0.8em", color: "#666", marginTop: "10px" }}>
        💡 El título de la pestaña se actualiza con el contador
      </p>
    </div>
  );
}

export default VisorDocumento;