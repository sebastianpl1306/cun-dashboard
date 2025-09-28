'use client'
import { useState } from "react";
import { Pregunta } from "@/src/interfaces";

interface Props {
    numeroPregunta: number;
    pregunta: Pregunta;
    isActive: boolean;
    validarPregunta: (pregunta: Pregunta, respuesta: string) => void;
}

export const ItemPregunta = ({ numeroPregunta, pregunta, isActive, validarPregunta }: Props) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className={`${isActive ? 'block' : 'hidden'} p-8`}>
        <div className="mb-8">
            <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                {numeroPregunta}
            </div>
            <span className="text-sm text-gray-500 font-medium">PREGUNTA</span>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {pregunta.enunciado}
            </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
            {pregunta.opciones.map((option, index) => (
            <label 
                key={index}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                selectedOption === option 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
            >
                <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-4 text-blue-600"
                />
                <span className="text-gray-800 font-medium mr-3">
                {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-gray-700">
                {option}
                </span>
            </label>
            ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex space-x-4">
            <button onClick={() => validarPregunta(pregunta, selectedOption)} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Validar
            </button>
            </div>
        </div>
    </div>
  )
}