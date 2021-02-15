import { json } from 'body-parser';
import React from 'react';
import '../../css/login.css';
import { Redirect } from 'react-router';

function Login(props) {

    const [avisos, setAvisos] = React.useState("");

    const autenticacao = function (){
        //componentes do login
        var email = document.getElementById("LogidEmail").value;
        var senha = document.getElementById("LogidSenha").value;

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "/autenticacao", true);

        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.addEventListener("load", function () {

            var resposta = xhr.responseText;

            let respostaJson= JSON.parse(resposta)

            if (respostaJson.token) {
                //muda o menu para o menu logado
                props.logado();
                console.log(respostaJson)
                //grava o token e o tipo de usuario no localstorage
                localStorage.setItem('token', respostaJson.token);
                localStorage.setItem('tipoUsuario', respostaJson.user.tipoUsuario);
                localStorage.setItem('id', respostaJson.id);

                //redireciona p pag inicial
                setLogado(true);
            } else {
                setAvisos(respostaJson.error);
            }
        });

        xhr.send("email=" + email + "&senha=" + senha);
    }

    const [ logado, setLogado ] = React.useState(false);

    if (logado){
        return <Redirect push to="/" />;
    }

    return (
        <div id="imagem">
            <br/><br/>
            <form className="form" id="form">
                <div className="card" id="card">

                    <div className="cardTop" id="cardTop">
                        <img className="imgLogin" id="imgLogin" src="img/lotus.png" alt="" />
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

                    <div className="cardGroup" >
                        <label id="avisosLogin">{avisos}</label>
                    </div>

                    <div className="cardGroup" id="cardGroup">
                        <button type="button" onClick={autenticacao}>ACESSAR</button>
                    </div>

                </div>
            </form>
            <br/><br/>
        </div>

    );
}

export default Login;