import React from "react"
import '../../Styles/Styles.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useNavigate } from "react-router-dom";

export default function AdvogadosEditar() {
    let idBoolean = false;        // edição

    const history = useNavigate();

    const [codigo, setCodigo] = useState(0);
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [sexo, setSexo] = useState('');
    const [faculdade, setFaculdade] = useState('');
    const [formatura, setFormatura] = useState('');

    const [checked, setChecked] = useState(false);

    const { idAdvogado } = useParams();

    function IfCrud() {
        if (idAdvogado === 0) {
            idBoolean = true;
        } 
    }

    useEffect(() => {
        async function getAdvogado() {
            if (idAdvogado == 0) {
                setChecked(true);
            } else {
                const { data } = await urlapi.get('/advogados/' + idAdvogado);
                setCodigo(data[0].adv_codigo);
                setNome(data[0].adv_nome);
                setApelido(data[0].adv_apelido);
                setSexo(data[0].adv_sexo);
                setFaculdade(data[0].adv_faculdade);
                setFormatura(data[0].adv_dtformatura);
            }
        }
        IfCrud();
        getAdvogado();
    }, []);

    async function handleAdvogados(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.adv_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                if (checked) { 
                    console.log("Inclusão de Registro!")
                    await urlapi.post('/advogados', data);
                } else {
                    console.log("Alteração de Registro! ",idAdvogado)
                    await urlapi.put('/advogado/' + idAdvogado, data);
                }
                //                history.push('/autores');
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.' + error)
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleAdvogados} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" id="adv_codigo" className="form-control"
                                name="adv_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-1">
                            <label> Nome do Advogado </label>
                            <input type="text" id="adv_nome" className="form-control"
                                name="adv_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="adv_apelido"
                                id="adv_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Sexo </label>
                            <input type="text" className="form-control" name="adv_sexo"
                                id="adv_sexo"
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Faculdade </label>
                            <input type="text" className="form-control" name="adv_faculdade"
                                id="adv_faculdade"
                                value={faculdade}
                                onChange={e => setFaculdade(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Data de Formatura </label>
                            <input type="text" className="form-control" name="adv_dtformatura"
                                id="adv_dtformatura"
                                value={formatura}
                                onChange={e => setFormatura(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/advogados" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}