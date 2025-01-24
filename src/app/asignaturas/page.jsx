import { PrismaClient } from "@prisma/client";

//creamos objeto prisma para interactuar con la BBDD
const prisma = new PrismaClient();

import { Suspense } from "react";

async function PaginaAsignaturas() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 py-8">
            <h1 className="text-4xl font-bold text-white mb-6">ASIGNATURAS:</h1>
            <Suspense fallback={"obteniendo asignaturas"}>
                <AsignaturasServer />
            </Suspense>
        </div>
    );
}

export default PaginaAsignaturas;

//--------------------------componente de servidor------------------------------------
async function AsignaturasServer() {
    const asignaturas = await prisma.asignatura.findMany()
    // console.log(asignaturas)

    return (
        <div className="w-full max-w-4xl space-y-6 px-4">
            {
                asignaturas.map(asignatura =>
                    <div 
                        className="border-2 border-blue-500 rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300" 
                        key={asignatura.id}
                    >
                        <h2 className="text-xl font-semibold text-blue-600">{asignatura.nombre}</h2>
                        <p className="text-md text-gray-700">Profesor que la imparte: {asignatura.profesor}</p>
                        <p className="text-md text-gray-700">Número de horas: {asignatura.num_horas}</p>
                    </div>
                )}
        </div>
    );
}