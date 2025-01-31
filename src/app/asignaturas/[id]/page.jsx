import AsignaturaServer from '@/components/Asignaturas/Item';
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

