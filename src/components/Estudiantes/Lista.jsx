import Modal from "@/components/Modal";
import { eliminarEstudiante, insertarEstudiante, modificarEstudiante } from "@/lib/actions";
import { obtenerEstudiantes } from "@/lib/data";
import EstudianteInsertar from "./Insertar";

//--------------------------componente de servidor------------------------------------
export default async function EstudianteServer() {
    const estudiantes = await obtenerEstudiantes();
    // console.log(estudiantes)

    return ( 
        <div className="w-full max-w-4xl space-y-6 px-4">
            <Modal texto="Insertar Estudiante" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <EstudianteInsertar />
            </Modal>

            {estudiantes.map(estudiante => 
                <div className="border-2 border-blue-500 rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300" key={estudiante.id}>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">Nombre: {estudiante.nombre}</p>
                        <p className="text-gray-700">Fecha de nacimiento: {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                        <p className="text-gray-700">Foto: <img src={estudiante.foto} alt="" /></p>
                        <p className="font-semibold text-lg">Tutor Legal: {estudiante.tutor_legal}</p>
                    </div>
                    
                    <Modal texto="Eliminar estudiante">
                        <h1>¿desea eliminar los siguientes datos? </h1>
                        <p>estudiante: {estudiante.nombre}</p>
                        <p>Fecha de nacimiento: {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                        <p>Foto del estudiante: <img src="{estudiante.foto}" alt="" /></p>
                        <p>Tutor legal: {estudiante.tutor_legal}</p> 
                        <form action={eliminarEstudiante} className="mt-4">
                            <input type="hidden" name="id" defaultValue={estudiante.id} />
                            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Eliminar</button>
                        </form> 
                    </Modal>



                    <Modal texto="Modificar estudiante">
                        <form action={modificarEstudiante} className="mt-4 space-y-2">
                            <input type="hidden" name="id" defaultValue={estudiante.id} />
                            <input name="nombre" defaultValue={estudiante.nombre} placeholder="nombre" className="w-full p-2 border border-gray-300 rounded"/>
                            <input name="fecha_nacimiento" defaultValue={estudiante.fecha_nacimiento.toLocaleDateString()} placeholder="fecha_nacimiento" className="w-full p-2 border border-gray-300 rounded"/>
                            <input name="foto" defaultValue={estudiante.foto} placeholder="Foto" className="w-full p-2 border border-gray-300 rounded"/>
                            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Modificar</button>
                        </form>
                    </Modal>

                </div>
            )}
        </div>
    );
}
