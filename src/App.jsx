import React, { useState } from "react";
import "./App.css";
import che from "./assets/rey_atanagildo.png";
import leo from "./assets/rey_leogivildo.png";
import ervi from "./assets/rey_ervigio.png";
import atau from "./assets/rey_ataulfo.png";
import teo from "./assets/rey_teodorico.png";
import buto from "./assets/rey_sisebuto.png";
import res from "./assets/rey_recesvinto.png";
import Prueba1 from "./Prueba1";
import Prueba2 from "./Prueba2"
import Prueba3 from "./Prueba3"
import Prueba4 from "./Prueba4"

const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9,
        img: che,
        color: "black" 
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3,
        img: leo,
        color: "black" 
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16,
        img: ervi,
        color: "black" 
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3,
        img: atau,
        color: "black"
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13,
        img: teo,
        color: "black" 
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11,
        img: buto,
        color: "black" 
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12,
        img: res,
        color: "black" 
    }]

    

const App = ({}) => {
return(

    <Prueba4 reyes={reyes}/>
    )
};

export default App;
