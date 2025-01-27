import Modal from "@/components/Modal";
import { eliminarGrupo, insertarGrupo, modificarGrupo } from "@/lib/actions";
import { PrismaClient } from "@prisma/client";

//creamos objeto prisma para interactuar con la BBDD
const prisma = new PrismaClient();

import { Suspense } from "react";

async function PaginaGrupos() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-teal-800 py-8">
            <h1 className="text-3xl font-bold text-white mb-6">GRUPOS</h1>
            
            <Suspense fallback={"obteniendo grupos"}>
                <GrupoServer />
            </Suspense>
        </div>
     );
}

export default PaginaGrupos;

//--------------------------componente de servidor------------------------------------
async function GrupoServer() {
    const grupos = await prisma.grupo.findMany();

    return ( 
        <div className="w-full max-w-4xl space-y-6 px-4">
            <Modal texto="Insertar Grupo" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                <form action={insertarGrupo} className="space-y-4">
                    <input name="nombre" placeholder="nombre" className="w-full p-2 border border-gray-300 rounded"/>
                    <input name="tutor" placeholder="Tutor/a" className="w-full p-2 border border-gray-300 rounded"/>
                    <input name="aula" placeholder="Aula" className="w-full p-2 border border-gray-300 rounded"/>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Insertar grupo</button>
                </form>
            </Modal>

            {grupos.map(grupo => 
                <div className="border-2 border-blue-500 rounded-lg p-6 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300" key={grupo.id}>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">Nombre: {grupo.nombre}</p>
                        <p className="text-gray-700">Tutor: {grupo.tutor}</p>
                        <p className="text-gray-700">Aula: {grupo.aula}</p>
                    </div>
                    
                    <Modal texto="Eliminar Grupo">
                        <h1>¿desea eliminar los siguientes datos? </h1>
                        <p>GRUPO: {grupo.nombre}</p>
                        <p>TUTOR: {grupo.tutor}</p>
                        <p>AULA: {grupo.aula}</p> 
                        <form action={eliminarGrupo} className="mt-4">
                            <input type="hidden" name="id" defaultValue={grupo.id} />
                            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Eliminar</button>
                        </form> 
                    </Modal>



                    <Modal texto="Modificar Grupo">
                        <form action={modificarGrupo} className="mt-4 space-y-2">
                            <input type="hidden" name="id" defaultValue={grupo.id} />
                            <input name="nombre" defaultValue={grupo.nombre} placeholder="nombre" className="w-full p-2 border border-gray-300 rounded"/>
                            <input name="tutor" defaultValue={grupo.tutor} placeholder="Tutor/a" className="w-full p-2 border border-gray-300 rounded"/>
                            <input name="aula" defaultValue={grupo.aula} placeholder="Aula" className="w-full p-2 border border-gray-300 rounded"/>
                            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Modificar</button>
                        </form>
                    </Modal>

                </div>
            )}
        </div>
    );
}

