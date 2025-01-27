'use client'

import { useRef } from "react";

function Modal({texto, children}) {
    const refModal = useRef();
    const openModal = () => refModal.current?.showModal();
    const closeModal = () => refModal.current?.close();



    return ( 
        <>
        <div onClick={openModal}>{texto}</div>
        <dialog ref={refModal}>
            
           {children}

            <div onClick={closeModal} className="bg-red-500 text-white py-2 px-4 rounded">Cerrar</div>
        </dialog>
        </>
     );
}

export default Modal;