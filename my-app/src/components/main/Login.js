import React from 'react';
import '../../css/login.css';

function Login() {
    /*-----  autenticar login  -----------------------------------------------------*/
    var autenticacao = function () {
        //componentes do login
        var email = document.getElementById("LogidEmail").value;
        var senha = document.getElementById("LogidSenha").value;

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "/autenticacao", true);

        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.addEventListener("load", function () {

        var resposta = xhr.responseText;

        console.log("Resposta: " + xhr.response);
        console.log("Texto" + resposta);
        
        });

        xhr.send("email="+email+"&senha="+senha);

    }

    return (
        <div>
            <form className="form" id="form">
                <div className="card" id="card">

                    <div className="cardTop" id="cardTop">
                        <img className="imgLogin" id="imgLogin" src="img/logo-allcare.png" alt="" />
                        <h2 className="titulo" id="titulo">Faça seu Login</h2>
                    </div>

                    <div className="cardGroup" id="cardGroup">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" id="LogidEmail" placeholder="Digite seu email" />
                    </div>

                    <div className="cardGroup" id="cardGroup">
                        <label htmlFor="">Senha</label>
                        <input type="password" name="usuario" id="LogidSenha" placeholder="Digite sua senha" />
                    </div>

                    <div className="cardGroup" id="cardGroup">
                        <label><input type="checkbox" /> Lembre-me</label>
                    </div>

                    <div className="cardGroup" id="cardGroup">
                        <button type="button" onClick={autenticacao}>ACESSAR</button>
                    </div>

                </div>
            </form>

        </div>

    );
}

export default Login;