'use server'
import { Curso, EvaluacionRespuesta, Leccion, Pregunta } from "../interfaces";

export async function obtenerCursos () {
    try {
        const cursos: Curso[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cursos`, {
            method: 'GET'
        }).then( data => data.json() );

        if(!cursos) throw new Error('No se pudo obtener los cursos');

        return cursos;
    } catch (error) {
        console.error('[ERROR][obtenerCursos]', { error });
        return []
    }
}

export async function obtenerCursoPorId (cursoId: string): Promise<Curso | null> {
    try {
        const curso: Curso = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cursos/${cursoId}`, {
            method: 'GET'
        }).then( data => data.json() );

        if(!curso.id) throw new Error(`No se pudo obtener el curso con id ${cursoId}`);

        return curso;
    } catch (error) {
        console.error('[ERROR][obtenerCursoPorId]', { error });
        return null
    }
}

export async function obtenerLeccionesPorCurso (cursoId: string) {
    try {
        const lecciones: Leccion[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cursos/${cursoId}/lecciones`, {
            method: 'GET'
        }).then( data => data.json() );

        if(!lecciones.length) throw new Error(`No se pudo obtener las lecciones del curso ${cursoId}`);

        return lecciones;
    } catch (error) {
        console.error('[ERROR][obtenerLeccionesPorCurso]', { error });
        return []
    }
}

export async function obtenerLeccionPorId(leccionId: string) {
    try {
        const leccion: Leccion = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lecciones/${leccionId}`, {
            method: 'GET'
        }).then( data => data.json() );

        if(!leccion.id) throw new Error(`No se pudo obtener la lección ${leccionId}`);

        return leccion;
    } catch (error) {
        console.error('[ERROR][obtenerLeccionPorId]', { error });
        return null
    }
}

export async function obtenerPreguntasPorLeccion(leccionId: string) {
    try {
        const preguntas: Pregunta[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lecciones/${leccionId}/preguntas`, {
            method: 'GET'
        }).then( data => data.json() );

        if(!preguntas.length) throw new Error(`No se pudo obtener las preguntas de la lección ${leccionId}`);

        return preguntas;
    } catch (error) {
        console.error('[ERROR][obtenerPreguntasPorLeccion]', { error });
        return []
    }
}

export async function evaluarRespuesta(preguntaId: number, respuestaUsuario: string) {
    try {
        const respuesta: EvaluacionRespuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/evaluar`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                preguntaId,
                respuestaUsuario
            })
        }).then( data => data.json() );

        if(!respuesta.preguntaId) throw new Error(`No se pudo obtener la respuesta a la pregunta ${preguntaId}`);

        return respuesta;
    } catch (error) {
        console.error('[ERROR][evaluarRespuesta]', { error });
        return null
    }
}