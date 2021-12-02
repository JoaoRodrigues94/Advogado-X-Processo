import React from "react"
import '../../Styles/Styles.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaAdvogados";
import { useEffect, useState } from 'react';

function Advogados() {
  const [advogados, setAdvogados] = useState([])
  
  useEffect(() => {
    urlapi.get('/advogados')
      .then(response => setAdvogados(response.data));
  }, []
  )

  return (
    <>
        <div id="idAdv">
          <div id="corpo_rel">
            <h2> Registros de Advogados Cadastrados</h2>
            <div className="FormFilter">
              <Tabela
                items={advogados}
                chave={'/advogados/'}
              />
            </div>
          </div>
        </div>
    </>
  );
}

export default Advogados;