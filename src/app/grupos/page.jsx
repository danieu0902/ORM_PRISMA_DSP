import { PrismaClient } from "@prisma/client";




//creamos objeto prisma para interactuar con la BBDD
const prisma = new PrismaClient();


async function PaginaGrupos() {
    const grupos= await prisma.grupo.findMany();
    //console.log(grupos);
    return ( 
        <div>
            {
                grupos.map(grupo =>
                
                <div key={grupo.id}>
                    <div>                    
                    <p>{grupo.nombre}</p>
                    <p>{grupo.tutor}</p>
                    <p>{grupo.aula}</p>
                    </div>
                    <hr />
                </div>
                )
            }      
        </div>
     );
}

export default PaginaGrupos;

//--------------------------componente de servidor------------------------------------
async function Producto(params) {
    
}