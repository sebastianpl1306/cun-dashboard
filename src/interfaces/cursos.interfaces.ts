export interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  createdAt: string;
  updatedAt: string;
}

export interface Leccion {
  id: number;
  nombre: string;
  cursoId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Pregunta {
  id: number;
  enunciado: string;
  opciones: string[];
}

export interface EvaluacionRequest {
  preguntaId: number;
  respuestaUsuario: string;
}

export interface EvaluacionResponse {
  preguntaId: number;
  respuestaUsuario: string;
  esCorrecta: boolean;
  respuestaCorrecta: string;
  mensaje: string;
}

export interface ApiError {
  statusCode: number;
  message: string;
  error: string;
}