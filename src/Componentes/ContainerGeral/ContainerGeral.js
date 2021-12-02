import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Menu from '../Menu/Menu.js';
import AreaDados from '../AreaDados/AreaDados.js';
import Footer from '../Rodape/Rodape.js';

import '../../Styles/Styles.css';

function ContainerGeral() {
    return (
        <div className="geral">
            <BrowserRouter>
                <Menu />
                <AreaDados />
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default ContainerGeral;