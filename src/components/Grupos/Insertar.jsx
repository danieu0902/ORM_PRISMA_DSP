import { insertarGrupo } from "@/lib/actions";

function GrupoInsertar() {
    return ( 
    <form action={insertarGrupo} className="space-y-4">
        <input name="nombre" placeholder="nombre" className="w-full p-2 border border-gray-300 rounded"/>
        <input name="tutor" placeholder="Tutor/a" className="w-full p-2 border border-gray-300 rounded"/>
        <input name="aula" placeholder="Aula" className="w-full p-2 border border-gray-300 rounded"/>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Insertar grupo</button>
    </form>
     );
}

export default GrupoInsertar;