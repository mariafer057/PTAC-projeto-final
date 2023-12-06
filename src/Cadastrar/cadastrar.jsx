import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cadastrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))  || [];
    const [nome, setNome ] = useState(listaLocalStorage);
   const [cantor, setCantor ] = useState("");
   const [duracao, setDuracao ] = useState("");
   const [estilo, setEstilo ] = useState("");
   const [descricao, setDescricao ] = useState("");
   const [album, setAlbum ] = useState("");
   const [link, setlink ] = useState("");
   const [lista, setLista ] = useState("");
   const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));}, [lista]);

    const salvar =(e) =>{
        // e.preventDefault(); > previnir o comportamento
        e.preventDefault();
        setLista([...lista, {
                nome: nome, 
                cantor:cantor, 
                duracao: duracao, 
                estilo: estilo,
                descricao: descricao,
                album: album,
                link: link,
                id: id
        }]);
        setId(id + 1);
        setNome("");
        setCantor("");
        setDuracao("");
        setEstilo("");
        setDescricao("");
        setAlbum("");
        setLink("");

    }
    <p className="txt-input"><b>Escolha o tipo:</b></p>
    <input value={tipo} type="text"
    onChange={(e)=>{ setTipo(e.target.value)}}/>
}


//pegando do anterior
//pegando novamente do cod anterior