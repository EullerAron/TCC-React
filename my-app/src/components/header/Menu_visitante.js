import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/menu_visitante.css';

function Menu_visitante(){
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top" id="menu_visitante">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-nav">
                            <img className="Logo" src="/img/logo-allcare.png" alt="AllCare" id="logoMenu"/>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/cadastro_usuario"><span className="glyphicon glyphicon-user"></span> Procuro um cuidador</Link></li>
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Quero ser um cuidador</a></li>
                        <li><Link to="/Login"><span className="glyphicon glyphicon-log-in" ></span> Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu_visitante;