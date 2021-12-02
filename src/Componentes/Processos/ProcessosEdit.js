import React from "react"
import './Processos';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useNavigate } from "react-router-dom";

export default function ProcessosEdit() {
    let idBoolean = false;        

    const history = useNavigate();


    const [codigo, setCodigo] = useState(0);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [vara, setVara] = useState('');
    const [data, setData] = useState('');
    const [codigoAdv, setcodigoAdv] = useState(0);

    const [checked, setChecked] = useState(false);

    const { id } = useParams();

    function IfCrud() {
        if (id === 0) {
            id = true;
        } else {
        }
    }

    useEffect(() => {
        async function getProcessos() {
            if (id == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                const { data } = await urlapi.get('/processos/' + id);
                console.log(data)

                setCodigo(data[0].pro_codigo);
                setNome(data[0].pro_nomereu);
                setDescricao(data[0].pro_descricao);
                setVara(data[0].pro_varatribunal);
                setData(data[0].pro_dataprocesso);
                setcodigoAdv(data[0].adv_codigo);
            }
        }
        IfCrud();
        getProcessos();
    }, []);

    async function handleProcessos(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Proc: ",id)
                if (id == 0) {
                    console.log("Inclusão de Registro!" + data)
                    await urlapi.post('processos', data);
                } else {
                    console.log("Alteração de Registro! ",id)
                    await urlapi.put('/processo/' + id, data);
                }
                //                history.push('/autores');
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleProcessos} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="pro_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-1">
                            <label> Nome Réu </label>
                            <input type="text" id="pro_nomereu" className="form-control"
                                name="pro_nomereu"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-1">
                            <label> Descrição </label>
                            <input type="text" className="form-control"
                                name="pro_descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-1">
                            <label> Vara / Tribunal </label>
                            <input type="text" className="form-control" name="pro_varatribunal"
                                id="pro_varatribunal"
                                value={vara}
                                onChange={e => setVara(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-2 offset-md-1">
                            <label> Data do Processo </label>
                            <input type="text" className="form-control" name="pro_dataprocesso"
                                id="pro_dataprocesso"
                                value={data}
                                onChange={e => setData(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código do Advogado </label>
                            <input type="text" className="form-control" name="adv_codigo"
                                id="adv_codigo"
                                value={codigoAdv}
                                onChange={e => setcodigoAdv(parseInt(e.target.value))}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/processos" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
