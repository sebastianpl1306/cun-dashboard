'use client'
import { Pregunta } from "@/src/interfaces";
import { useCursosStore } from "@/src/store/cursos-store";

interface Props {
    preguntasFinales: Pregunta[];
}

export const ProgresoPregunta = ({ preguntasFinales }: Props) => {
  const { respuestasPreguntas } = useCursosStore(state => state);

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Progreso de la Lección
        </h3>
        <div className="flex space-x-2">
        {preguntasFinales.map((q, index) => (
            <button
                key={q.id}
                className={`w-10 h-10 rounded-full font-semibold text-sm transition-colors ${
                    respuestasPreguntas.find(preguntaFind => preguntaFind.preguntaId === q.id)?.esCorrecta
                    ? 'bg-green-600 text-white' 
                    : (respuestasPreguntas.find(preguntaFind => preguntaFind.preguntaId === q.id)?.esCorrecta === false)
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
                >
                {index + 1}
            </button>
        ))}
        </div>
    </div>
  )
}