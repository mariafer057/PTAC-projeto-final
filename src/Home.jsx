import Cabecalho from './componentes/cabecalho';
import Card from './Card/Card';
import "./home.css"

export default function Home(){
    return(
        <div>
         <Cabecalho/>
         <h1>{"videos"}</h1>

     <h1>PTAC 2 - PROJETO FINAL</h1>

     {lista.map((videos)=>
     <Card videos={videos}/>
     )}

     

        </div>
   
     );
}   
//peguei o código anterior do meu projeto PTAC-2-AULA5
//pegando o navbar do bootstrap