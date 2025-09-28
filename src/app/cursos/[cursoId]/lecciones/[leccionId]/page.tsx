'use client'
import { Breadcrumb, ContenedorPregunta, ProgresoPregunta } from '@/src/components';
import { LeccionesHeader } from '@/src/components/lecciones';
import { BreadcrumbItem, Leccion } from '@/src/interfaces';

const breadcrumbItem: BreadcrumbItem[] = [
  {
    title: "Inicio",
    url: "/",
    isFinish: false
  },
  {
    title: "Cursos",
    url: "/cursos",
    isFinish: false
  },
  {
    title: "Nombre curso",
    url: "/cursos/1",
    isFinish: false
  },
  {
    title: "Lección 1",
    url: "/cursos/1/lecciones/1",
    isFinish: true
  },
]

export default function DetalleLeccionesPage() {

  const lesson: Leccion = {
    id: 5,
    nombre: "Aritmética Básica",
    cursoId: 3
  };

  const preguntas = [
      {
          id: 12,
          enunciado: "¿Cuál es el resultado de 8 × 7?",
          opciones: [
              "54",
              "56",
              "58",
              "60"
          ]
      },
      {
          id: 11,
          enunciado: "¿Cuál es el resultado de 15 + 27?",
          opciones: [
              "40",
              "42",
              "43",
              "45"
          ]
      },
      {
          id: 13,
          enunciado: "¿Cuál es el resultado de 144 ÷ 12?",
          opciones: [
              "10",
              "11",
              "12",
              "13"
          ]
      }
  ];

  const currentQuestion = preguntas[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbItem}/>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow-md">
          <LeccionesHeader leccion={lesson}/>
          <ContenedorPregunta pregunta={currentQuestion}/>
        </div>
        <ProgresoPregunta preguntasFinales={preguntas}/>
      </main>
    </div>
  );
}