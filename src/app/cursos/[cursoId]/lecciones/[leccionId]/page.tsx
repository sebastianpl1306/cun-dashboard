import { Breadcrumb, ContenedorPregunta, ProgresoPregunta } from '@/src/components';
import { LeccionesHeader } from '@/src/components/lecciones';
import { obtenerCursoPorId, ObtenerLeccionPorId, ObtenerPreguntasPorLeccion } from '@/src/functions/cursos-funciones';
import { BreadcrumbItem, Leccion } from '@/src/interfaces';
import { notFound } from 'next/navigation';

interface Props {
  params: { cursoId: string, leccionId: string };
}

export default async function DetalleLeccionesPage({ params }: Props) {
  const { cursoId, leccionId } = await params;
  const curso = await obtenerCursoPorId(cursoId);
  const leccion: Leccion | null = await ObtenerLeccionPorId(leccionId);
  const preguntas = await ObtenerPreguntasPorLeccion(leccionId);

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
          <ContenedorPregunta pregunta={preguntas[0]}/>
        </div>
        <ProgresoPregunta preguntasFinales={preguntas}/>
      </main>
    </div>
  );
}