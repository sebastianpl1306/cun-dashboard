import { Curso, Leccion } from "@/src/interfaces"
import Link from "next/link"

interface Props {
    curso: Curso
    lecciones: Leccion[]
}

export const ListaDeLecciones = ({ curso, lecciones }: Props) => {
  return (
    <div className="divide-y divide-gray-200">
        {lecciones.map((lesson, index) => (
            <div key={lesson.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                    </div>
                </div>
                
                <div>
                    <h3 className="text-lg font-medium text-gray-900">
                        {lesson.nombre}
                    </h3>
                </div>
                </div>
                
                <div className="flex items-center space-x-3">
                <Link
                    href={`/cursos/${curso.id}/lecciones/${lesson.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                    Comenzar
                </Link>
                </div>
            </div>
            </div>
        ))}
        </div>
  )
}