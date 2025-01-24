import { PrismaClient } from "@prisma/client";

//creamos objeto prisma para interactuar con la BBDD
const prisma = new PrismaClient();

import { Suspense } from "react";

async function PaginaGrupos() {
    return ( 
        <div>
            <h1>GRUPOS</h1>
            <Suspense fallback={"obteniendo grupos"}>
                <GrupoServer />
            </Suspense>
        </div>
     );
}

export default PaginaGrupos;

//--------------------------componente de servidor------------------------------------
async function GrupoServer() {
    const grupos = await prisma.grupo.findMany()
    // console.log(grupos)

    return ( 
        <div>
                {
                grupos.map(grupo => 
                    <div className=" border-blue-500 rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-200" key={grupo.id}>
                        Nombre:{grupo.nombre}
                        <p>Tutor:{grupo.tutor}</p>
                        <p>Aula:{grupo.aula}</p>
                    
                    </div>
                   
                )}
       
        </div>



      );
}
