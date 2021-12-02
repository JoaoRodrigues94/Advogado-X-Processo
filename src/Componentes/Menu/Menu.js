import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Menu.css';
import Footer from '../Rodape/Rodape.js';

export default function Menu() {
  return (
      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/advogados"> Advogados </Link> </li>
              <li> <Link to="/processos"> Processos </Link> </li>
            </ul>
          </nav>
        </div>
      </div>
  );
}