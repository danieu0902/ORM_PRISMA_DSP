import { obtenerEstudiante } from '@/lib/data';
//--------------------------componente de servidor------------------------------------
export default async function Estudiante({id}) {
    const estudiante= await obtenerEstudiante(id);
        return ( 
            <div>
                <p>{estudiante.nombre}</p>
                <p>{estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                <p>{estudiante.foto}</p>
                <p>{estudiante.tutor_legal}</p>
            </div>
         );
}