import { useReducer, useEffect } from "react";
import { NotasContext } from "./NotasContext";

// Estado inicial con notas precargadas
const estadoInicial = {
  notas: [
    {
      id: "1",
      titulo: "Bienvenido a MisNotas",
      contenido: "Esta es tu aplicación de notas. Podés crear, editar y organizar tus ideas por categorías.",
      categoria: "personal",
      fijada: true,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "2",
      titulo: "Reunión de equipo",
      contenido: "Martes 15:00 en sala de conferencias. Temas: planificación del sprint.",
      categoria: "trabajo",
      fijada: true,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "3",
      titulo: "Estudiar React",
      contenido: "Repasar useState, useEffect, Context API, useReducer y React Router.",
      categoria: "estudio",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "4",
      titulo: "Idea para app",
      contenido: "Desarrollar una aplicación de tareas con sincronización en la nube.",
      categoria: "ideas",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "5",
      titulo: "Compras semanales",
      contenido: "Leche, huevos, pan, frutas, verduras, carne.",
      categoria: "personal",
      fijada: false,
      fechaCreacion: new Date().toISOString(),
    },
  ],
  filtroCategoria: "todas",
  busqueda: "",
};

// Reducer
function notasReducer(state, action) {
  switch (action.type) {
    case "AGREGAR_NOTA":
      return {
        ...state,
        notas: [action.payload, ...state.notas],
      };

    case "ELIMINAR_NOTA":
      return {
        ...state,
        notas: state.notas.filter((nota) => nota.id !== action.payload),
      };

    case "EDITAR_NOTA":
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload.id ? { ...nota, ...action.payload.data } : nota
        ),
      };

    case "TOGGLE_FIJADA":
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload ? { ...nota, fijada: !nota.fijada } : nota
        ),
      };

    case "CAMBIAR_FILTRO":
      return {
        ...state,
        filtroCategoria: action.payload,
      };

    case "CAMBIAR_BUSQUEDA":
      return {
        ...state,
        busqueda: action.payload,
      };

    case "CARGAR_NOTAS":
      return {
        ...state,
        notas: action.payload,
      };

    default:
      return state;
  }
}

// Provider
export function NotasProvider({ children }) {
  const [state, dispatch] = useReducer(notasReducer, estadoInicial);

  // Guardar en localStorage cuando cambian las notas
  useEffect(() => {
    try {
      localStorage.setItem("notas-app", JSON.stringify(state.notas));
    } catch (error) {
      console.error("Error guardando en localStorage:", error);
    }
  }, [state.notas]);

  // Leer desde localStorage al inicio
  useEffect(() => {
    try {
      const guardadas = localStorage.getItem("notas-app");
      if (guardadas) {
        const notasGuardadas = JSON.parse(guardadas);
        dispatch({ type: "CARGAR_NOTAS", payload: notasGuardadas });
      }
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
    }
  }, []);

  // Acciones
  const agregarNota = (nota) => {
    dispatch({ type: "AGREGAR_NOTA", payload: nota });
  };

  const eliminarNota = (id) => {
    dispatch({ type: "ELIMINAR_NOTA", payload: id });
  };

  const editarNota = (id, data) => {
    dispatch({ type: "EDITAR_NOTA", payload: { id, data } });
  };

  const toggleFijada = (id) => {
    dispatch({ type: "TOGGLE_FIJADA", payload: id });
  };

  const cambiarFiltro = (categoria) => {
    dispatch({ type: "CAMBIAR_FILTRO", payload: categoria });
  };

  const cambiarBusqueda = (texto) => {
    dispatch({ type: "CAMBIAR_BUSQUEDA", payload: texto });
  };

  const value = {
    notas: state.notas,
    filtroCategoria: state.filtroCategoria,
    busqueda: state.busqueda,
    agregarNota,
    eliminarNota,
    editarNota,
    toggleFijada,
    cambiarFiltro,
    cambiarBusqueda,
  };

  return <NotasContext.Provider value={value}>{children}</NotasContext.Provider>;
}