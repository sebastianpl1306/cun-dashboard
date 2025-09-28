import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumb, ContenedorPreguntas, ProgresoPregunta } from '@/src/components';
import { LeccionesHeader } from '@/src/components/lecciones';
import { obtenerCursoPorId, obtenerLeccionPorId, obtenerPreguntasPorLeccion } from '@/src/functions/cursos-funciones';
import { BreadcrumbItem, Leccion } from '@/src/interfaces';

interface Props {
  params: { cursoId: string, leccionId: string };
}

export default async function DetalleLeccionesPage({ params }: Props) {
  const { cursoId, leccionId } = await params;
  const curso = await obtenerCursoPorId(cursoId);
  const leccion: Leccion | null = await obtenerLeccionPorId(leccionId);
  const preguntas = await obtenerPreguntasPorLeccion(leccionId);

  if(!curso || !leccion?.id) {
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
      url: `/cursos/${curso.id}`,
      isFinish: false
    },
    {
      title: leccion.nombre,
      url: `/cursos/${curso.id}/lecciones/${leccion.id}`,
      isFinish: true
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbItem}/>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow-md">
          <LeccionesHeader leccion={leccion}/>
          {
            !preguntas.length ? (
              <div className='py-8 font-bold'>
                <h3 className='text-3xl text-center'>Este curso no tiene preguntas</h3>
                <Link href={`/cursos/${leccion.cursoId}`} className="flex items-center text-gray-600 hover:text-gray-800 font-medium">
                    Volver al curso
                </Link>
              </div>
            ) : (<ContenedorPreguntas preguntas={preguntas} leccion={leccion}/>)
          }
        </div>
        <ProgresoPregunta preguntasFinales={preguntas ? preguntas : []}/>
      </main>
    </div>
  );
}