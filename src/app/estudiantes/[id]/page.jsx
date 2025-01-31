import Estudiante from '@/components/Estudiantes/Item';
import{PrismaClient} from '@prisma/client';
import { Suspense } from 'react';

const prisma = new PrismaClient();


async function PaginaEstudiante({params}) {
    const {id}=await params;
    return(
        <div>
            <h1>DATOS DE ESTUDIANTE</h1>
            <Suspense fallback={"obteniendo estudiante"}>
                <Estudiante id={id} />
            </Suspense>
        </div>

    );

}

export default PaginaEstudiante;


