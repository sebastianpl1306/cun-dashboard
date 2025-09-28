import { Pregunta } from "@/src/interfaces";

interface Props {
    preguntasFinales: Pregunta[];
}

export const ProgresoPregunta = ({ preguntasFinales }: Props) => {
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
                    index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                >
                {index + 1}
            </button>
        ))}
        </div>
    </div>
  )
}