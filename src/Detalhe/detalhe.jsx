import { useParams } from "react-router-dom";
import Card from '../componentes/Card';

export default function Detalhe(){
    return(
        <div><h1>olá</h1></div>
    );
}





   /* const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    console.log(lista);

    const ativ = lista.filter((objeto) => {
        if(objeto.id == id){
            return objeto;
        }
        return null
    })
    console.log(ativ[0]);
    
    return(
       <Card ativ={ativ[0]}></Card>
    );
}/*

//ADD OS COMENTS PQ TA DANDO ERRO