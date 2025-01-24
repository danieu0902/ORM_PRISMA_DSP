import { PrismaClient } from "@prisma/client";

//creamos objeto prisma para interactuar con la BBDD
const prisma = new PrismaClient();

import { Suspense } from "react";

async function PaginaAsignaturas() {
    return (
        <div>
            <h1>ASIGNATURAS:</h1>
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
        <div>
            {
                asignaturas.map(asignatura =>
                    <div className=" border-blue-500 rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-200" key={asignatura.id}>
                        Nombre de la asignatura: {asignatura.nombre}
                        <p>Profesor que la imparte: {asignatura.profesor}</p>
                        <p>Numero de horas: {asignatura.num_horas}</p>
                        <br />
                    </div>
                )}
        </div>



    );
}
