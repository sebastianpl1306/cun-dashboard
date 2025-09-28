import { Leccion } from '../../../interfaces/cursos.interfaces';

interface Props {
    leccion: Leccion;
    totalRespuestasCorrectas: number;
    totalRespuestasPreguntas: number
}

export const HeaderReporteFinal = ({ leccion, totalRespuestasCorrectas, totalRespuestasPreguntas }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                ¡Lección Completada!
            </h1>
            
            <h2 className="text-xl text-gray-600 mb-6">
                {leccion.nombre}
            </h2>

            <div className="flex justify-center items-center space-x-8 mb-6">
                <div className="text-center">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                            {totalRespuestasCorrectas}/ {totalRespuestasPreguntas}
                        </div>
                        <div className="text-sm text-gray-500">Correctas</div>
                    </div>
            </div>

            <p className="text-gray-500">
                Completado el {new Date().toLocaleDateString()}
            </p>
        </div>
        </div>
    </div>
  )
}