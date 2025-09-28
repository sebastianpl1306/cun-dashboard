import { preguntasFinales } from '@/src/interfaces';

interface Props {
    resultadosRespuestas: preguntasFinales[];
}

export const DetalleReporteFinal = ({ resultadosRespuestas }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900">
            Detalle de Respuestas
        </h3>
        </div>

        <div className="divide-y divide-gray-200">
        {resultadosRespuestas.map((pregunta, index) => (
            <div key={pregunta.preguntaId} className="p-6">
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                    pregunta.esCorrecta 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                    {pregunta.esCorrecta ? '✓' : '✗'}
                </div>
                </div>
                <div className="flex-1">
                <div className="flex items-center mb-3">
                    <h4 className="text-lg font-medium text-gray-900 mr-3">
                    Pregunta {pregunta.preguntaId}
                    </h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                    pregunta.esCorrecta 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                    {pregunta.esCorrecta ? 'Correcta' : 'Incorrecta'}
                    </span>
                </div>
                
                <p className="text-gray-700 mb-4">
                    {pregunta.pregunta.enunciado}
                </p>
                <div className="space-y-2">
                    <div className={`flex items-center p-3 rounded-lg ${
                    pregunta.esCorrecta ? 'bg-green-50 border border-green-200' : ''
                    }`}>
                    <span className="text-sm font-medium text-gray-600 mr-2">
                        Tu respuesta:
                    </span>
                    <span className={`font-medium ${
                        pregunta.esCorrecta ? 'text-green-700' : 'text-red-600'
                    }`}>
                        {pregunta.respuestaUsuario}
                    </span>
                    </div>

                    {!pregunta.esCorrecta && (
                    <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                        <span className="text-sm font-medium text-gray-600 mr-2">
                        Respuesta correcta:
                        </span>
                        <span className="font-medium text-green-700">
                        {pregunta.respuestaCorrecta}
                        </span>
                    </div>
                    )}
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}