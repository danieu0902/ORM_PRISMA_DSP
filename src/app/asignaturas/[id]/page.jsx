import{PrismaClient} from '@prisma/client';
import { Suspense } from 'react';

const prisma = new PrismaClient();


async function PaginaAsignatura({params}) {
    const {id}=await params;
    return(
        <div>
            <h1>DATOS DE LA ASIGNATURA</h1>
            <Suspense fallback={"obteniendo asignatura, por favor espere"}>
                <AsignaturaServer id={id} />
            </Suspense>
        </div>

    );

}

export default PaginaAsignatura;


//--------------------------componente de servidor------------------------------------
async function AsignaturaServer({id}) {
    const asignatura= await prisma.asignatura.findUnique({
        where:{
            id: +id
        }
    });
        return ( 
            <div>
                <p>{asignatura.nombre}</p>
                <p>{asignatura.profesor}</p>
                <p>{asignatura.num_horas}</p>
            </div>
         );
}