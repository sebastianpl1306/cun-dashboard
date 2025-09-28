import React from 'react'
import Link from 'next/link'
import { Curso } from '@/src/interfaces'

interface Props {
    curso: Curso
}

export const CursosCard = ({ curso }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Curso
            </div>
            <span className="text-sm text-gray-500">ID: {curso.id}</span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {curso.nombre}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">
            {curso.descripcion}
            </p>
            
            <div className="flex items-center justify-between">
            
            <Link
                href={`/cursos/${curso.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
                Ver Curso
            </Link>
            </div>
        </div>
        </div>
  )
}