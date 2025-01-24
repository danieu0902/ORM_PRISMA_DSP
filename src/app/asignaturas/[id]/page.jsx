import { PrismaClient } from '@prisma/client';
import { Suspense } from 'react';

const prisma = new PrismaClient();

async function PaginaAsignatura({ params }) {
    const { id } = await params;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 py-8">
            <h1 className="text-4xl font-bold text-white mb-6">DATOS DE LA ASIGNATURA</h1>
            <Suspense fallback={"Obteniendo asignatura, por favor espere"}>
                <AsignaturaServer id={id} />
            </Suspense>
        </div>
    );
}

export default PaginaAsignatura;

//--------------------------componente de servidor------------------------------------
async function AsignaturaServer({ id }) {
    const asignatura = await prisma.asignatura.findUnique({
        where: {
            id: +id
        }
    });
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