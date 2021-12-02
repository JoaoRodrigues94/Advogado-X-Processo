import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css';
export default function Tabela(props) {
  function getLinhas() {
    const arrayRegistros = props.items;
    return arrayRegistros.map((item, i) => {
      return (
        <tr key={item.adv_codigo} style={{ textAlign: 'justify' }}>
          <td> {item.adv_codigo} </td>
          <td> {item.adv_nome} </td>
          <td> {item.adv_apelido} </td>
          <td> {item.adv_sexo} </td>
          <td> {item.adv_faculdade} </td>
          <td> {item.adv_dtformatura} </td>
          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.adv_codigo} > Editar </a></td>
          <td> <Link to={props.chave + item.adv_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>
          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }
  return (
    <div className="tabela">
      <table id="tabelaAdv" className="table table-dark table-striped" style={{width: '97vw'}}>
        <thead>
          <tr style={{ textAlign: 'justify' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Nome </th>
            <th scope="col"> Apelido </th>
            <th scope="col"> Sexo </th>
            <th scope="col"> Faculdade </th>
            <th scope="col"> Data de Formatura </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Advogado</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )
}