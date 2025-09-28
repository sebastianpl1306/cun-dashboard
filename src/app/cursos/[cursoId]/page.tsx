import { Breadcrumb, CursosHeader } from '@/src/components';
import { ListaDeLecciones } from '@/src/components/lecciones';
import { BreadcrumbItem, Curso, Leccion } from '@/src/interfaces';

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
    isFinish: true
  },
]

export default async function CourseDetail() {

  const curso: Curso = {
    id: 1,
    nombre: "Introducción a JavaScript",
    descripcion: "Aprende los fundamentos de JavaScript desde cero con ejemplos prácticos y ejercicios interactivos",
    createdAt: '',
    updatedAt: ''
  };

  const lecciones: Leccion[] = [
      {
        id: 5,
        nombre: "Aritmética Básica",
        cursoId: 3
      },
      {
        id: 6,
        nombre: "Introducción al Álgebra",
        cursoId: 3
      }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbItem}/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <CursosHeader curso={curso} numeroLecciones={5}/>

        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Contenido del Curso
            </h2>
          </div>
          
          <ListaDeLecciones lecciones={lecciones} curso={curso}/>
        </div>
      </main>
    </div>
  );
}