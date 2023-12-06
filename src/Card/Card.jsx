import { Link } from "react-router-dom"

export default function Card({videos}){
    return(
        lista.map((videos) =>
        <div className="">

        <div key= {videos.id}>
        <Link to = {`/Detalhe/${videos.id}`}>
            <h4>Detalhes:{videos.nome}</h4>
        </Link>

        <iframe width= "500" height= "300"src={`https://www.youtube.com/embed/${videos.link.slice(17)}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>

        

        </div>
        </div>
        )
    );
}
//pegando do meu projeto PTAC-2-AULA5/ CARD

//preguiça por isso copiei e colei do cadastar