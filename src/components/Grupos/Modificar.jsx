import { modificarGrupo } from "@/lib/actions";

function GrupoModificar({grupo}) {
    return ( 
        <form action={modificarGrupo} className="mt-4 space-y-2">
            <input type="hidden" name="id" defaultValue={grupo.id} />
            <input name="nombre" defaultValue={grupo.nombre} placeholder="nombre" className="w-full p-2 border border-gray-300 rounded"/>
            <input name="tutor" defaultValue={grupo.tutor} placeholder="Tutor/a" className="w-full p-2 border border-gray-300 rounded"/>
            <input name="aula" defaultValue={grupo.aula} placeholder="Aula" className="w-full p-2 border border-gray-300 rounded"/>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Modificar</button>
        </form>
     );
}

export default GrupoModificar;