import Cabecalho from './componentes/cabecalho';
import "./home.css"
export default function Home(){
    return(
        <div>
         <Cabecalho/>
         <h1>{"videos"}</h1>

     <h1>PTAC 2 - PROJETO FINAL</h1>

     {lista.map((videos)=>
     <div className="video">
        <p>{videos.}</p>
        <p>{videos.}</p>
        <p>{videos.}</p>
        <p>{videos.}</p>
        <p>{videos.}</p>
        <p>{videos.}</p>
        <p>{videos.id}</p>

     </div>
     <iframe width= "500" height= "300"src="" frameborder="0"></iframe>
     )}

        </div>
   
     );
}   
//peguei o código anterior do meu projeto PTAC-2-AULA5
//pegando o navbar do bootstrap