'use client'
import { Leccion } from "@/src/interfaces"
import Link from "next/link"

interface Props {
  leccion: Leccion
}

export const AccionesReporteFinal = ({ leccion }: Props) => {
  return (
    <div className="flex items-center justify-between mt-8">
        <Link href={`/cursos/${leccion.cursoId}`} className="flex items-center text-gray-600 hover:text-gray-800 font-medium">
            Volver al curso
        </Link>
    </div>
  )
}