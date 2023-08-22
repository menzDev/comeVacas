import React from "react";

const Prueba2 = ({ rey }) => {
    const contieneG = rey.filter(r => !r.nombre.includes("g"));
    const soloG = contieneG.map((e) => {
        const removerG = (e) =>{
            e.target.parentNode.remove()
        }
        return (
      <div key={e.nombre}>
        {e.nombre} <button onClick={removerG}>Borrar</button>
      </div>
    );
  });

  console.log(soloG);
  return(
    <>
    {soloG}
    </>
    )
};

export default Prueba2;
