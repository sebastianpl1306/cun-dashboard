import { create } from 'zustand'
import { CursosState, Pregunta, preguntasFinales } from '../interfaces';

interface State extends CursosState {
    cargarPreguntas: (preguntas: Pregunta[]) => void;
    cargarRespuestaPregunta: (respuestaPregunta: preguntasFinales) => void;
    limpiarRespuestas: () => void;
}

export const useCursosStore = create<State>()((set) => ({
    preguntas: [],
    respuestasPreguntas: [],
    cargarPreguntas: (preguntas: Pregunta[]) => {
        set({ respuestasPreguntas: [], preguntas: preguntas })
    },
    cargarRespuestaPregunta: (respuestaPregunta: preguntasFinales) => {
        set((state) => ({
            respuestasPreguntas: [...state.respuestasPreguntas, respuestaPregunta]
        }))
    },
    limpiarRespuestas: () => {
        set({ respuestasPreguntas: [] })
    }
}))