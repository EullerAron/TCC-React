import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/menu_visitante.css';

function Menu_Usuario_Cuidador(props) {
    return (
        <div>
            <nav id="menuPrincipal" className="navbar navbar-inverse" id="menu_visitante">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-nav">
                            <img className="Logo" src="/img/lotusBranca.png" alt="AllCare" id="logoMenu" />
                        </Link>
                    </div>
                    <div id="idMenuDropDown">
                        <div class="dropdown">
                            <button className="dropbtn"><i className="fas fa-user-edit"></i> Minha Conta</button>
                            <div className="dropdown-content">
                                <Link to="/">Editar Cadastro</Link>
                                <Link to="/solicitacoes">Solicitações</Link>
                                <a href="#">Minhas Avaliações</a>
                            </div>
                        </div>
                        <Link to="/" onClick={props.deslogado} className="dropbtn" ><i className="fas fa-sign-out-alt"></i> Logout</Link>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Menu_Usuario_Cuidador;