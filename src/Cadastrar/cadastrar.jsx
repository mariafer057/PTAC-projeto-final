import Detalhe from './Detalhe/Detalhe';
export default function Cadastrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [lista, setLista ] = useState(listaLocalStorage   || []);
   const [tipo, setTipo ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [imagem, setImagem ] = useState("");
   const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));}, [lista]);

    const salvar =(e) =>{
        // e.preventDefault(); > previnir o comportamento
        e.preventDefault();
        setLista([...lista, {
                tipo: tipo, 
                marca:marca, 
                preco: preco, 
                imagem: imagem,
                id: id
        }]);
        setId(id + 1);
        setTipo("");
        setMarca("");
        setPreco("");
        setImagem("");
        console.log(id)
    };