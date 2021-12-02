import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Advogados from '../Advogados/Advogados.js';
import AdvogadosEdit from '../Advogados/AdvogadosEdit.js';
import Processos from '../Processos/Processos.js';
import ProcessosEditar from '../Processos/ProcessosEdit.js';
import Inicio from '../Inicio/Inicio.js';
import Footer from '../Rodape/Rodape.js';

import '../../Styles/Styles.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/advogados' element={<Advogados/>} />
        <Route path='/advogados/:idAdvogado' element={<AdvogadosEdit/>} />
        <Route path='/processos' element={<Processos/>} />
        <Route path='/processos/:id' element={<ProcessosEditar/>} />
      </Routes>
    </div>
  );
}

