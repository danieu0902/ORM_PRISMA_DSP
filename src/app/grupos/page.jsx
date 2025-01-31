
import GrupoServer from "@/components/Grupos/Lista";
import { Suspense } from "react";

function PaginaGrupos() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-teal-800 py-8">
            <h1 className="text-3xl font-bold text-white mb-6">GRUPOS</h1>
            
            <Suspense fallback={"obteniendo grupos"}>
                <GrupoServer />
            </Suspense>
        </div>
     );
}

export default PaginaGrupos;

