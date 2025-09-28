import { create } from 'zustand'
import { CursosState, Leccion } from '../interfaces';

interface State extends CursosState {
    seleccionarLeccion: (leccion: Leccion | null) => void;
}

export const useCursosStore = create<State>()((set) => ({
    leccionActual: null,
    seleccionarLeccion: (leccion: Leccion | null) => {
        set({ leccionActual: leccion })
    },
}))