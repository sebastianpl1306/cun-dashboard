import { Pregunta, preguntasFinales } from "./cursos.interfaces";

export interface CursosState {
    preguntas: Pregunta[];
    respuestasPreguntas: preguntasFinales[]
}