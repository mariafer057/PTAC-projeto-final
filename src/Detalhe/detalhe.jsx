import { Link, useParams } from "react-router-dom";
import Cabecalho from "../componentes/cabecalho";
import Card from '../Card/Card';

export default function Detalhe(){

    const {id} useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));

    const videos=lista.filter((objeto) => {
        if (objeto.id == id){
            return objeto;
        }
        return null;
    }
    );
}

return(
    videos.map((video)=> 
    <div key={videos.id}>
        <Cabecalho/>
<h1>Veja os detalhes sobre a música</h1>
<p><strong>Nome: </strong>{videos.nome}</p>
<iframe width= "500" height= "300"src={`https://www.youtube.com/embed/${video.link.slice(17)}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
<p><strong>letra da Música: </strong>{videos.LetraMsc}</p>
<p><strong>Cantor: </strong>{videos.Cantor}</p>







    </div>
    )
)
