import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/menu_visitante.css';

function Menu_visitante(){
    return (
        <div>
            <nav id="menuPrincipal" className="navbar navbar-inverse" id="menu_visitante">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-nav">
                            <img className="Logo" src="/img/lotusBranca.png" alt="AllCare" id="logoMenu"/>
                        </Link>
                    </div>
                    <ul id="headerList" className="nav navbar-nav navbar-right">
                        <li><Link to="/cadastro"><i class="fas fa-map-marked-alt"></i> Procuro um cuidador</Link></li>
                        <li><Link to="/cad_cuidador"><i class="fas fa-user-check"></i> Quero ser um cuidador</Link></li>
                        <li><Link to="/Login"><i class="far fa-user-circle"></i> Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu_visitante;