import React from 'react';
import { Link } from 'react-router-dom';

function Footer_principal() {
    return (
        <div>
            <footer className="footer" id="footer">
                <div className="footer-infos">
                    <p>INFORMAÇÕES ÚTEIS</p>
                    <a href="">Quem Somos</a><br />
                    <a href="">Serviços</a><br />
                    <p><Link to="/contato">Contato</Link></p><br />
                </div>
                <div className="footer-redesSociais">
                    <p>REDES SOCIAIS</p>
                    <a href="">
                        <img src="/img/icone-instagram.png" alt="Instagram All Care" />
                    </a>
                    <a href="">
                        <img src="/img/icone-facebook.png" alt="Facebook All Care" />
                    </a>
                </div>
            </footer>
        </div>

    );
}

export default Footer_principal;