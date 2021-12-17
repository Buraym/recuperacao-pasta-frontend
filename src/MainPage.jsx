import { useState, useEffect } from 'react';
import api from './api.js';

function MainPage (props){

    useEffect(() => {
        api.get( props.tipopagina == "produto" ? "/produtos" : props.tipopagina == "tipo" ? "/tipos" : "/fornecedores"  , {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            }})
        .then(response => {
            console.log(response.data);
            setLista(response.data);
        })
        if(lista.length > 0){
            setVazio(false);}
    }, []);

    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setpreco] = useState("");
    const [venda, setVenda] = useState("");
    const [fornecedor, setFornecedor] = useState("");

    const [idTipo, setIdTipo] = useState("");
    const [nomeTipo, setNomeTipo] = useState("");

    const [idFornecedor, setIdFornecedor] = useState("");
    const [nomeFornecedor, setNomeFornecedor] = useState("");
    const [cidade, setCidade] = useState("");

    const [lista, setLista] = useState([]);

    function handleSubmit1(event) {
        event.preventDefault();
    }

    function HandleSubmit2(event){
        if(props.tipopagina == "produto"){
            api.post("/produtos", {
                id: id,
                nome: nome,
                preco: preco,
                venda: venda,
                fornecedor: fornecedor
            }, {
                method: 'POST',
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                }})
            .then(response => {
                console.log(response.data);
                setLista(response.data);
            })
        } else if(props.tipopagina == "tipo"){
            api.post("/tipos", {
                id: idTipo,
                nome: nomeTipo
            }, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }})
            .then(response => {
                console.log(response.data);
                setLista(response.data);
            })
        } else if(props.tipopagina == "fornecedor"){
            api.post("/fornecedores", {
                id: idFornecedor,
                nome: nomeFornecedor,
                cidade: cidade
            }, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }})
            .then(response => {
                console.log(response.data);
                setLista(response.data);
            })
        }
        
        event.preventDefault();
    }

    return (
        <div className='tela'>
            { props.tipopagina === "produto" ? <label className='titulo'>Produtos</label> : props.tipopagina === "tipo" ? <label className='titulo'>Tipos de Produtos</label> : <label className='titulo'>Fornecedores</label> }

            <div className='caixa'>
                {
                    lista.map(item => {
                        return (
                            <div className='card'>
                                <form>
                                    <input className='card-nome' placeholder={item.id}/>
                                    <input className='card-nome' placeholder={item.nome}/>
                                    {
                                        props.tipopagina === "produto" ?
                                            <>
                                                <input className='card-preco' placeholder={item.preco}/>
                                                <input className='card-venda' placeholder={item.venda}/>
                                                <input className='card-fornecedor' placeholder={item.fornecedor}/>
                                                <input className='card-tipo' placeholder={item.tipo}/>
                                            </>

                                            :
                                                props.tipopagina === "tipo" ?

                                                    <></>

                                                    :

                                                        props.tipopagina === "fornecedor" ?

                                                        <input className='card-texto' placeholder={item.cidade}/>

                                                            :
                                                                <></>
                                            
                                    }
                                    <input className='botao-mudar' value="MUDAR CADASTRO" type="submit"/>
                                </form>
                            </div>
                        )
                    })
                }

                <div className='card-adicionar'>
                    <form>
                        <input className='card-nome' placeholder="ID"/>
                        <input className='card-nome' placeholder="NOME"/>
                        {
                            props.tipopagina === "produto" ?
                                <>
                                    <input className='card-preco' placeholder="PREÇO"/>
                                    <input className='card-venda' placeholder="VENDA"/>
                                    <input className='card-fornecedor' placeholder="FORNECEDOR"/>
                                    <input className='card-tipo' placeholder="TIPO"/>
                                </>

                                :
                                    props.tipopagina === "tipo" ?

                                        <></>

                                        :

                                            props.tipopagina === "fornecedor" ?

                                            <input className='card-texto' placeholder="CIDADE"/>

                                                :
                                                    <></>
                                
                        }
                        <input className='botao-mudar' value="CRIAR CADASTRO" type="submit"/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default MainPage;