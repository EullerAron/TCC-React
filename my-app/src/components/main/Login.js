import React from 'react';
import '../../css/login.css';

function Login() {
    return (
        <div>
            <form class="form" action="" id="form" method="POST">
                <div class="card" id="card">

                    <div class="cardTop" id="cardTop">
                        <img class="imgLogin" id="imgLogin" src="img/logo-allcare.png" alt="" />
                        <h2 class="titulo" id="titulo">Faça seu Login</h2>
                    </div>

                    <div class="cardGroup" id="cardGroup">
                        <label for="">Usuário</label>
                        <input type="text" name="usuario" placeholder="Digite seu usuário" />
                    </div>

                    <div class="cardGroup" id="cardGroup">
                        <label for="">Senha</label>
                        <input type="password" name="usuario" placeholder="Digite sua senha" />
                    </div>

                    <div class="cardGroup" id="cardGroup">
                        <label><input type="checkbox" /> Lembre-me</label>
                    </div>

                    <div class="cardGroup" id="cardGroup">
                        <button type="submit">ACESSAR</button>
                    </div>

                </div>
            </form>

        </div>

        /*
        <div>
            <form className="form">
                <div className="card">
                        <div className="cardTop">
                            <img className="imgLogin" src="img/logo-allcare.png"/>
                            <h2 className="titulo">Faça seu Login</h2>
                        </div>
                    
                    <div className="cardGroup">
                        <label htmlFor="">Usuário</label>
                        <input type="text" name="usuario" placeholder="Digite seu usuário"/>
                    </div>

                    <div className="cardGroup">
                        <label htmlFor="">Senha</label>
                        <input type="password" name="usuario" placeholder="Digite sua senha"/>
                    </div>

                    <div className="cardGroup">
                        <label><input type="checkbox"/>Lembre-me</label>
                    </div>

                    <div className="cardGroup">
                        <button type="submit">ACESSAR</button>
                    </div>
                </div>

            </form>
        </div>
        */
    );
}

export default Login;