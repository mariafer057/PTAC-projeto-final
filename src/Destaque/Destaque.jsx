import { useState, useEffect } from "react";
import Cabecalho from "../componentes/cabecalho";
export default function Detalhe(){
    const lista = JSON.parse(localStorage.getItem("Lista")).slice(-4);


    return(
        <div>
            <Cabecalho/>
            
        </div>
    )
}