import React from "react";


/* const Prueba3 = ({reyes}) => {
 
 const result = reyes.filter(rey => rey.nombre[0].toLowerCase().includes("ñ")).map(r => r.nombre)

if (result.length === 0) {
 return (<>
  <p>No salio ni una mosca</p>
  </>)
}

  return(
    <>
    {result}
    </>
  )
} */

const Prueba3 = ({reyes}) => {

  const result = reyes.find(rey => rey.nombre.toLowerCase().substring(0, 1) === "ñ")
  return(
    <>
    {result == undefined ? "no hay vida" : result.nombre}
    </>
  )
}

export default Prueba3