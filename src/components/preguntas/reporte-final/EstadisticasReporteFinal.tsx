import React from 'react'

interface Props {
    totalRespuestasCorrectas: number;
    totalRespuestasIncorrectas: number
}

export const EstadisticasReporteFinal = ({ totalRespuestasCorrectas, totalRespuestasIncorrectas }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            </div>
            <div>
            <div className="text-2xl font-bold text-green-600">
                {totalRespuestasCorrectas}
            </div>
            <div className="text-gray-600">Respuestas Correctas</div>
            </div>
        </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            </div>
            <div>
            <div className="text-2xl font-bold text-red-600">
                {totalRespuestasIncorrectas}
            </div>
            <div className="text-gray-600">Respuestas Incorrectas</div>
            </div>
        </div>
        </div>
    </div>
  )
}
