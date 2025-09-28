import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="bg-cyan-700 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">CUN - Cursos</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-100 hover:text-gray-300">
                Cursos
              </Link>
            </nav>
          </div>
        </div>
    </header>
  )
}