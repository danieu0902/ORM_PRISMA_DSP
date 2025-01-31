import { obtenerGrupo } from '@/lib/data';
//--------------------------componente de servidor------------------------------------
export default async function Grupo({id}) {
    const grupo= await obtenerGrupo(id);
        return ( 
            <div>
                <p>{grupo.nombre}</p>
                <p>{grupo.tutor}</p>
                <p>{grupo.aula}</p>
            </div>
         );
}