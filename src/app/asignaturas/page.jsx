import { insertarAsignatura, modificarAsignatura, eliminarAsignatura } from "@/lib/actions";
import { PrismaClient } from "@prisma/client";
import Modal from "@/components/Modal";

//creamos objeto prisma para interactuar con la BBDD
const prisma = new PrismaClient();

import { Suspense } from "react";

async function PaginaAsignaturas() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 py-8">
            <h1 className="text-4xl font-bold text-white mb-6">ASIGNATURAS:</h1>
            <Suspense fallback={"obteniendo asignaturas"}>
                <AsignaturasServer />
            </Suspense>
        </div>
    );
}

export default PaginaAsignaturas;

//--------------------------componente de servidor------------------------------------
async function AsignaturasServer() {
    const asignaturas = await prisma.asignatura.findMany()
    // console.log(asignaturas)

    return (
        <div className="w-full max-w-4xl space-y-6 px-4">

            <Modal texto="Insertar Asignatura" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <form action={insertarAsignatura} className="space-y-4">
                    <input name="nombre" placeholder="nombre" className="w-full p-2 border border-gray-300 rounded" />
                    <input name="profesor" placeholder="profesor que la imparte" className="w-full p-2 border border-gray-300 rounded" />
                    <input name="num_horas" placeholder="numero de horas" className="w-full p-2 border border-gray-300 rounded" />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Insertar asignatura</button>
                </form>
            </Modal>

            {asignaturas.map(asignatura => 
                <div className="border-2 border-blue-500 rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300" key={asignatura.id}>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">Nombre: {asignatura.nombre}</p>
                        <p className="text-gray-700">Profesor que la imparte: {asignatura.profesor}</p>
                        <p className="font-semibold text-lg">Numero de horas: {asignatura.num_horas}</p>
                    </div>
                    
                    <Modal texto="Eliminar asignatura">
                        <h1>¿desea eliminar los siguientes datos? </h1>
                        <p>asignatura:{asignatura.nombre}</p>
                        <p>Profesor:{ asignatura.profesor}</p>
                        <p>Numero de horas: {asignatura.num_horas}</p> 
                        <form action={eliminarAsignatura} className="mt-4">
                            <input type="hidden" name="id" defaultValue={asignatura.id} />
                            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Eliminar</button>
                        </form> 
                    </Modal>



                    <Modal texto="Modificar asignatura">
                        <form action={modificarAsignatura} className="mt-4 space-y-2">
                            <input type="hidden" name="id" defaultValue={asignatura.id} />
                            <input name="nombre" defaultValue={asignatura.nombre} placeholder="nombre" className="w-full p-2 border border-gray-300 rounded"/>
                            <input name="profesor" defaultValue={asignatura.profesor} placeholder="profesor" className="w-full p-2 border border-gray-300 rounded"/>
                            <input name="num_horas" defaultValue={asignatura.num_horas} placeholder="numero de horas" className="w-full p-2 border border-gray-300 rounded"/>
                            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Modificar</button>
                        </form>
                    </Modal>

                </div>
            )}
        </div>
    );
}
