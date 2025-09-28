'use client'
import { Leccion } from "@/src/interfaces"

interface Props {
    leccion: Leccion
}

export const AccionesReporteFinal = ({ leccion }: Props) => {
  return (
    <div className="flex items-center justify-between mt-8">
        <button className="flex items-center text-gray-600 hover:text-gray-800 font-medium">
            Volver al curso
        </button>
    </div>
  )
}