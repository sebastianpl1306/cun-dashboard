import { CursosCard } from "../components";
import { obtenerCursos } from "../functions/cursos-funciones";

export default async function Home() {
  const cursos = await obtenerCursos();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Cursos Disponibles
        </h2>
        <p className="text-gray-600">
          Explora nuestra colección de cursos y mejora tus habilidades
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((curso) => (
          <CursosCard key={curso.id} curso={curso}/>
        ))}
      </div>
    </main>
  );
}
