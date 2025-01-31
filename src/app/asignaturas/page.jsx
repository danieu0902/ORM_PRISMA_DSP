import AsignaturasServer from "@/components/Asignaturas/Lista";
import { Suspense } from "react";


 function PaginaAsignaturas() {
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

