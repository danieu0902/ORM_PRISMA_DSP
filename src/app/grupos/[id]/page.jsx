
import { Suspense } from 'react';
import prisma from '@/lib/prisma';
import Grupo from '@/components/Grupos/Item';


async function PaginaGrupo({params}) {
    const {id}=await params;
    return(
        <div>
            <h1>DATOS DE PRODUCTO</h1>
            <Suspense fallback={"obteniendo grupo"}>
                <Grupo id={id} />
            </Suspense>
        </div>

    );

}

export default PaginaGrupo;


