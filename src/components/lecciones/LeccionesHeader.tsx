import { Leccion } from "@/src/interfaces"

interface Props {
    leccion: Leccion;
}

export const LeccionesHeader = ({ leccion }: Props) => {
  return (
    <div className="px-8 py-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {leccion.nombre}
        </h1>
        <div className="flex items-center text-sm text-gray-500">
            <span>Lección {leccion.id}</span>
            <span className="mx-2">•</span>
            <span>Curso ID: {leccion.cursoId}</span>
        </div>
    </div>
  )
}