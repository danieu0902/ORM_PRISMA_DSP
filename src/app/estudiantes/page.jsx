import EstudianteServer from "@/components/Estudiantes/Lista";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
//creamos objeto prisma para interactuar con la BBDD
const prisma = new PrismaClient();



 function PaginaEstudiantes() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-teal-800 py-8">
            <h1 className="text-3xl font-bold text-white mb-6">ESTUDIANTES</h1>
            <Suspense fallback={"obteniendo estudiantes"}>
                <EstudianteServer />
            </Suspense>
        </div>
     );
}

export default PaginaEstudiantes;


