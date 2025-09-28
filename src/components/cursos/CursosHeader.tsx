import { Curso } from "@/src/interfaces"
import Link from "next/link";

interface Props {
    curso: Curso;
    numeroLecciones: number;
    idPrimeraLeccion: number | null;
}

export const CursosHeader = ({ curso, numeroLecciones, idPrimeraLeccion }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-start justify-between">
        <div className="flex-1">
            <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3">
                Curso ID: {curso.id}
            </span>
            <span className="text-sm text-gray-500">{numeroLecciones} lecciones disponibles</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {curso.nombre}
            </h1>
            
            <p className="text-gray-600 text-lg mb-6">
            {curso.descripcion}
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>{numeroLecciones} lecciones</span>
            </div>
        </div>

        {
            idPrimeraLeccion && (<Link href={`/cursos/${curso.id}/lecciones/${idPrimeraLeccion}`} className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
                Comenzar Curso
            </Link>)
        }
        </div>
    </div>
  )
}