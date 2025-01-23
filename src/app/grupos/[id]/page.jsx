import{PrismaClient} from '@prisma/client';
import { Suspense } from 'react';

const prisma = new PrismaClient();


async function PaginaGrupo({params}) {
    const {id}=await params;
    return(
        <div>
            <h1>DATOS DE PRODUCTO</h1>
            <Suspense fallback={"obteniendo producto"}>
                <Producto id={id} />
            </Suspense>
        </div>

    );

}

export default PaginaGrupo;


// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
async function Producto({id}) {
    const grupo= await prisma.grupo.findUnique({
        where:{
            id: +id
        }
    });
    console.log(grupo);
        return ( 
            <div>
                <p>{grupo.nombre}</p>
                <p>{grupo.tutor}</p>
                <p>{grupo.aula}</p>
            </div>
         );
}