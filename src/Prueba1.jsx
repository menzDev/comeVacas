import React from "react";

const Prueba1 = ({rey}) => {
    const imagen = "https://html6.es/img/rey_"
    const flow = rey.map(el =>{
            return(
                <div key={el.nombre} className="flex flex-col mb-4 items-center justify-center bg-red-600 rounded-[20px] w-full h-[300px] p-5">
                <h2 className="text-white-600 font-bold"><span className="text-black">{el.nombre.toUpperCase()}</span> ha comido {
                  el.vacasComidas} en sus {el.reinado} años de reinado</h2>
                <img className="w-[70%] h-auto" src={imagen+el.nombre + ".png"} alt="" />
                </div>
            )
        })

    return(
        <>
        {flow}
        </>
    )
}

export default Prueba1