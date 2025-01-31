import { obtenerAsignatura } from '@/lib/data';
//--------------------------componente de servidor------------------------------------
export default async function AsignaturaServer({ id }) {
    const asignatura = obtenerAsignatura(id);
    return (
        <div className="w-full max-w-4xl px-4 space-y-6">
            <div className="border-2 border-blue-500 rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{asignatura.nombre}</h2>
                <p className="text-md text-gray-700">Profesor: {asignatura.profesor}</p>
                <p className="text-md text-gray-700">Número de horas: {asignatura.num_horas}</p>
            </div>
        </div>
    );
}