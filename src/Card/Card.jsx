export default function Card({videos}){
    return(
        <div>
            <p>{videos.nome}</p>
            <p>{videos.cantor}</p>
            <p>{videos.duracao}</p>
            <p>{videos.estilo}</p>
            <p>{videos.descricao}</p>
            <p>{videos.album}</p>
            <p>{videos.id}</p>

            <iframe width= "500" height= "300"src={`https://www.youtube.com/embed/${videos.link.slice()}`} frameborder="0"></iframe>

        </div>
    );
}
//pegando do meu projeto PTAC-2-AULA5/ CARD

//preguiça por isso copiei e colei do cadastar