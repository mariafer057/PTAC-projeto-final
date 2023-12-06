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
                id: id
        }]);
        setId(id + 1);
        setTipo("");
        setMarca("");
        setPreco("");
        setImagem("");
        console.log(id)
    };
//pegando do anterior