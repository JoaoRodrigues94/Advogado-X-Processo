import React from "react"
import '../../Styles/Styles.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaProcessos";
import { useEffect, useState } from 'react';

function Processos() {
  const [processos, setProcessos] = useState([])
  
  useEffect(() => {
    urlapi.get('processos')
      .then(response => setProcessos(response.data));
  }, []
  )

  return (
    <>
        <div id="idProc">
          <div id="corpo_rel">
            <h2> Registros de Processos Cadastrados</h2>
            <div className="FormFilter">
              <Tabela
                items={processos}
                chave={'/processos/'}
              />
            </div>
          </div>
        </div>
    </>
  );
}

export default Processos;