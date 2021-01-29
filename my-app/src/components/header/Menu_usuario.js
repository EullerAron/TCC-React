import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/menu_visitante.css';

function Menu_usuario(props) {
    return (
        <div>
            <nav id="menuPrincipal" className="navbar navbar-inverse navbar-fixed-top" id="menu_visitante">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-nav">
                            <img className="Logo" src="/img/lotus (1)" alt="AllCare" id="logoMenu" />
                        </Link>
                    </div>
                        <ul id="headerList" className="nav navbar-nav navbar-right">
                            <li><a><i class="fas fa-user-edit"></i> Minha Conta</a></li>
                            <li><Link to="/"><a onClick={props.deslogado}><i class="fas fa-sign-out-alt"></i> Logout</a></Link></li>
                        </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu_usuario;