import { useState, useEffect } from "react";
import Cabecalho from "../componentes/cabecalho";
import Card from "../Card/Card";
export default function Detalhe(){
    const lista = JSON.parse(localStorage.getItem("Lista")).slice(-4);
    const destaque = lista.slice(-5)
    console.log(lista)

    return(
        <div>
            <Cabecalho/>
            <Card lista = {destaque}/>
        </div>
    );
}