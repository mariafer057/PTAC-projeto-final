import { useParams } from "react-router-dom";
import Cadastrar from "../Cadastrar/cadastrar";

export default function Detalhe(){
    const {id} = useParams();
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
}
