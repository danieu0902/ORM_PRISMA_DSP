import { eliminarGrupo } from "@/lib/actions";

function GrupoEliminar(grupo) {
    return ( 
        <>
            <h1>¿desea eliminar los siguientes datos? </h1>
                        <p>GRUPO: {grupo.nombre}</p>
                        <p>TUTOR: {grupo.tutor}</p>
                        <p>AULA: {grupo.aula}</p> 
                        <form action={eliminarGrupo} className="mt-4">
                            <input type="hidden" name="id" defaultValue={grupo.id} />
                            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Eliminar</button>
                        </form> 
        </>
     );
}

export default GrupoEliminar;