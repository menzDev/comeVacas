import React from "react";

export default function Prueba4({reyes}){
    const sumar = (e) =>{
       e.target.innerText++
    }
    const resultado = reyes.filter(rey=>rey.vacasComidas>10 && rey.reinado>10).map(rey=> <div className="text-[25px]" key = {rey.nombre}>{rey.nombre}<p onClick={sumar}>0</p></div>)

    return(
        <div className="retorno">
            <div className="flex justify-around w-[400px] ">{resultado}</div>     
        </div>
    )
}

