import React from 'react';
import '../../css/login.css';

function Login() {
    return (
        <div>
            <div class="container">
            <span class="glyphicon glyphicon-log-in" data-toggle="modal" data-target="#myModal"> Login</span>
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-lg" id="idQuadro">


                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title"></h4>
                            </div>
                            <div class="modal-body">
                                <form className="form">
                                    
                                        <div className="cardTop" id="idCardTop">
                                            <img className="imgLogin" id="idImgLogin" src="img/logo-allcare.png" />
                                            <h2 className="titulo" id="idTitulo">Faça seu Login</h2>
                                        </div>

                                        <div className="cardGroup" id="idCardGroup">
                                            <label htmlFor="">Usuário</label>
                                            <input type="text" name="usuario" placeholder="Digite seu usuário" />
                                        </div>

                                        <div className="cardGroup">
                                            <label htmlFor="">Senha</label>
                                            <input type="password" name="usuario" placeholder="Digite sua senha" />
                                        </div>

                                        <div className="cardGroup">
                                            <label><input type="checkbox" />Lembre-me</label>
                                        </div>

                                        <div className="cardGroup">
                                            <button type="submit">ACESSAR</button>
                                        </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
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