import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/footer.css';

function Footer_principal() {
    //teste token
    const token = function(){
            var xhr = new XMLHttpRequest();
    
            xhr.open("POST", "/token", true);
    
            // Envia a informação do cabeçalho junto com a requisição.
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("x-access-token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTJhODI0YjBiMjQ0MWU2NjMwZmFiYSIsImlhdCI6MTYxMTgzNTQ3NiwiZXhwIjoxNjExOTIxODc2fQ.AlVYSMaFuHwS_qtqZwoGq4OJJLJKAoqwkbtxyO6QaWs");
    
            xhr.addEventListener("load", function () {
    
            var resposta = xhr.responseText;
    
            console.log("Resposta: " + xhr.response);
            console.log("Texto" + resposta);
            
            });
    
            xhr.send();
    }

    return (
        <div>
            <footer className="footer" id="footer">
                <div className="footer-infos">
                    <p>INFORMAÇÕES ÚTEIS</p>
                    <a>Quem Somos</a><br />
                    <a>Serviços</a><br />
                    <Link to="/contato">Contato</Link><br />
                </div>
                <div className="footer-redesSociais">
                    <p>REDES SOCIAIS</p>
                    <a>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a>
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </div>
            </footer>
        </div>

    );
}

export default Footer_principal;