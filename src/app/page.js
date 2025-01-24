import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-400">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">¡Bienvenido a la escuela de DAW 24-25!</h1>
        <p className="text-lg text-gray-200">
          Aquí encontrarás información sobre los grupos, estudiantes y asignaturas.
        </p>
        <div className="space-y-4">
          <Link
            href="/grupos"
            className="block bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 hover:shadow-xl transition hover:text-white"
          >
            GRUPOS
          </Link>
          <Link
            href="/estudiantes"
            className="block bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 hover:shadow-xl transition hover:text-white"
          >
            ESTUDIANTES
          </Link>
          <Link
            href="/asignaturas"
            className="block bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 hover:shadow-xl transition hover:text-white"
          >
            ASIGNATURAS
          </Link>
        </div>
      </div>
    </div>
  );
}
