import { insertarEstudiante } from "@/lib/actions";

function EstudianteInsertar() {
    return ( 
        <form action={insertarEstudiante} className="space-y-4">
                    <input name="nombre" placeholder="nombre" className="w-full p-2 border border-gray-300 rounded"/>
                    <input name="fecha_nacimiento" placeholder="fecha de nacimiento" className="w-full p-2 border border-gray-300 rounded"/>
                    <input name="foto" placeholder="url de la foto del estudiante" className="w-full p-2 border border-gray-300 rounded"/>
                    <input name="tutor_legal" placeholder="tutor legal" className="w-full p-2 border border-gray-300 rounded"/>
                    <input type="number" name="grupoId" placeholder="id del grupo" className="w-full p-2 border border-gray-300 rounded"/>

                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Insertar Estudiante</button>
                </form>
     );
}

export default EstudianteInsertar;