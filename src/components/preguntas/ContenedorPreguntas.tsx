'use client'
import { Leccion, Pregunta } from "@/src/interfaces"
import { useCursosStore } from "@/src/store/cursos-store"
import { useEffect, useState } from "react"
import { ItemPregunta } from "./ItemPregunta"
import { evaluarRespuesta } from "@/src/functions/cursos-funciones"
import { ReporteFinalPreguntas } from "./reporte-final/ReporteFinalPreguntas"

interface Props {
  preguntas: Pregunta[];
  leccion: Leccion;
}

export const ContenedorPreguntas = ({ preguntas, leccion }: Props) => {
  const { preguntas: preguntasFinales, cargarPreguntas, cargarRespuestaPregunta, respuestasPreguntas, limpiarRespuestas } = useCursosStore(state => state);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [informeFinal, setInformeFinal] = useState(false);

  useEffect(() => {
    cargarPreguntas(preguntas);
    setPreguntaActual(preguntas[0].id);

    return () => {
      limpiarRespuestas();
      setInformeFinal(false);
      setPreguntaActual(0);
    }
  }, [preguntas])

  const validarPregunta = async (pregunta: Pregunta, respuesta: string) => {
    const resultado = await evaluarRespuesta(pregunta.id, respuesta);
    
    if(!resultado?.preguntaId) return;

    cargarRespuestaPregunta({...resultado, pregunta});
    continuarPreguntas(pregunta);
  }

  const continuarPreguntas = (pregunta: Pregunta)  => {
    const siguientePregunta = preguntas.findIndex(preguntaIndex => preguntaIndex.id == pregunta.id) + 1;

    if(!pregunta || !siguientePregunta || siguientePregunta <= 0) return;

    if(siguientePregunta >= preguntas.length) {
      setInformeFinal(true);
      return;
    }

    setPreguntaActual(preguntas[siguientePregunta].id);
  }

  return (
    <div>
      {
        !informeFinal && (
          <div>
            { preguntasFinales.map((pregunta) => (
                <ItemPregunta
                    key={pregunta.id}
                    numeroPregunta={preguntas.findIndex(preguntaIndex => preguntaIndex.id == pregunta.id) + 1}
                    pregunta={pregunta}
                    isActive={preguntaActual === pregunta.id}
                    validarPregunta={validarPregunta}
                />
            ))}
          </div>
        )
      }
      {
        informeFinal && (
          <ReporteFinalPreguntas
            mostrarInforme={informeFinal}
            leccion={leccion}
            respuestasPreguntas={respuestasPreguntas}
          />
        )
      }
    </div>
  )
}