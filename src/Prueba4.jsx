import React from "react";;

export default function Prueba4({reyes}){
    const resultado = reyes.find(rey => rey.nombre === "Ervigio")
    const resultado2 = reyes.find(rey => rey.nombre === "Teodorico")

    return(
        <div className="flex justify-around w-[400px]">
            <div>{resultado.nombre} <p>0</p></div>
            <div>{resultado2.nombre} <p>0</p></div>
            
        </div>
    )
}

