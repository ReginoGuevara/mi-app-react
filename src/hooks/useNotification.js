import { useState, useEffect, useCallback } from "react";

function useNotification(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);

  const mostrar = useCallback((mensaje, tipo = "info") => {
    const id = Date.now();
    setNotificacion({ id, mensaje, tipo });
  }, []);

  const cerrar = useCallback(() => {
    setNotificacion(null);
  }, []);

  useEffect(() => {
    if (notificacion) {
      const timeout = setTimeout(() => {
        cerrar();
      }, duracion);

      return () => clearTimeout(timeout);
    }
  }, [notificacion, duracion, cerrar]);

  return { notificacion, mostrar, cerrar };
}

export default useNotification;