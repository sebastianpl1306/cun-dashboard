'use server'
import { Curso, Leccion } from "../interfaces";

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