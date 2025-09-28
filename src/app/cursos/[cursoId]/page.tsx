import { Breadcrumb, CursosHeader } from '@/src/components';
import { ListaDeLecciones } from '@/src/components/lecciones';
import { obtenerCursoPorId, obtenerLeccionesPorCurso } from '@/src/functions/cursos-funciones';
import { BreadcrumbItem, Curso } from '@/src/interfaces';
import { notFound } from 'next/navigation';

interface Props {
  params: { cursoId: string };
}

export default async function CourseDetail({ params }: Props) {
  const { cursoId } = await params;
  const curso = await obtenerCursoPorId(cursoId);
  const lecciones = await obtenerLeccionesPorCurso(cursoId);

  if(!curso) {
    notFound()
  }

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
      title: curso.nombre,
      url: "/cursos/1",
      isFinish: true
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbItem}/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <CursosHeader curso={curso} numeroLecciones={lecciones.length} idPrimeraLeccion={lecciones[0].id}/>

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