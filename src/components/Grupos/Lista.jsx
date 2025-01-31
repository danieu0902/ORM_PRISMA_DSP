import Modal from "@/components/Modal";
import { obtenerGrupos } from "@/lib/data";
import GrupoInsertar from "./Insertar";
import GrupoEliminar from "./Eliminar";
import GrupoModificar from "./Modificar";

//--------------------------componente de servidor------------------------------------
export default async function GrupoServer() {
    const grupos = await obtenerGrupos();

    return ( 
        <div className="w-full max-w-4xl space-y-6 px-4">
            <Modal texto="Insertar Grupo" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
            <GrupoInsertar />
            </Modal>

            {grupos.map(grupo => 
                <div className="border-2 border-blue-500 rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300" key={grupo.id}>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">Nombre: {grupo.nombre}</p>
                        <p className="text-gray-700">Tutor: {grupo.tutor}</p>
                        <p className="text-gray-700">Aula: {grupo.aula}</p>
                    </div>
                    
                    <Modal texto="Eliminar Grupo">
                        <GrupoEliminar grupo={grupo} />
                    </Modal>



                    <Modal texto="Modificar Grupo">
                        <GrupoModificar grupo={grupo} />
                    </Modal>

                </div>
            )}
        </div>
    );
}

