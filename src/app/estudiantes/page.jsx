import { PrismaClient } from "@prisma/client";

//creamos objeto prisma para interactuar con la BBDD
const prisma = new PrismaClient();

import { Suspense } from "react";

async function PaginaEstudiantes() {
    return ( 
        <div>
            <h1>ESTUDIANTES:</h1>
            <Suspense fallback={"obteniendo estudiantes"}>
                <EstudianteServer />
            </Suspense>
        </div>
     );
}

export default PaginaEstudiantes;

//--------------------------componente de servidor------------------------------------
async function EstudianteServer() {
    const estudiantes = await prisma.estudiante.findMany()
    // console.log(estudiantes)

    return ( 
        <div>
                {
                estudiantes.map(estudiante => 
                    <div className=" border-blue-500 rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-200" key={estudiante.id}>
                        Nombre:{estudiante.nombre}
                        <p>Fecha de nacimiento:{estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                        <p>Foto:{estudiante.foto}</p>
                        <p>Tutor legal:{estudiante.tutor_legal}</p>
                    </div> 
                )}
        </div>



      );
}
