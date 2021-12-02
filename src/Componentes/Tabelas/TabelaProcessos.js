import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      return (
        <tr key={item.pro_codigo} style={{ textAlign: 'justify' }}>
          <td> {item.pro_codigo} </td>
          <td> {item.pro_nomereu} </td>
          <td> {item.pro_descricao} </td>
          <td> {item.pro_varatribunal} </td>
          <td> {item.pro_dataprocesso} </td>
          <td> {item.adv_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.pro_codigo} > Editar </a></td>
          <td> <Link to={props.chave + item.pro_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-dark table-striped" style={{width: '97vw'}} >
        <thead>
          <tr style={{ textAlign: 'justify' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Nome Réu </th>
            <th scope="col"> Descrição </th>
            <th scope="col"> Vara Tribunal </th>
            <th scope="col"> Data Processo </th>
            <th scope="col"> Código Advogado </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block"> Novo Processo </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}