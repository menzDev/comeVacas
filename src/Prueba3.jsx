import React from "react";

const Prueba3 = ({pepe}) =>{
    return(
        <>
        {pepe.filter(e => e.nombre[0].toLowerCase().includes("e")).map(main => {
            return(
                <>
                {main.nombre}<br></br>
                </>
            )
        })
        }
        </>
    )

}

export default Prueba3;