import { useState, useEffect } from "react";

function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave);
      if (guardado !== null) {
        return JSON.parse(guardado);
      }
    } catch (error) {
      console.error(`Error al leer localStorage clave "${clave}":`, error);
    }
    return valorInicial;
  });

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error(`Error al guardar en localStorage clave "${clave}":`, error);
    }
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;