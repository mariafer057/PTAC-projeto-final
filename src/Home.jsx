import Cabecalho from './componentes/cabecalho';
import Card from './Card/Card';
import "./home.css"

export default function Home(){
    const lista =  JSON.parse(localStorage.getItem("Lista")) 
    console.log(lista)
    return(
        <div>
         <Cabecalho/>
        <h1>ola</h1>

        <Card videos={videos}/>
</div>
        );
}

//peguei o código anterior do meu projeto PTAC-2-AULA5
//pegando o navbar do bootstrap