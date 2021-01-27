import React from 'react';
import '../../../src/index.css';

function Cadastro() {
    return (
        <main id="Cadmain-cadastro" >
            <form action="/cadastro" method="POST">
                <div className="form-group">
                    <fieldset className="CadfieldCadastro">
                        <h1>Cadastro</h1>

                        <div id="CaddivImg">
                            <div className="text-center" id="CaddivImg2">
                                <img id="Cadimg_preview" src="/img/adicionar-fotos.png" alt="Image Preview" />
                                <br /><br />
                                <input type="file" id="Cadimg_input" className="form-control" />
                            </div>
                        </div>

                        <div className="Cadcampo" id="CaddivNome">
                            <label htmlFor="CadidNome"><b>Nome: </b></label>
                            <input type="text" id="CadidNome" name="nmNome" className="form-control" />
                        </div>

                        <div className="Cadcampo" id="CaddivNasc">
                            <label htmlFor="CadidDataNasc"><b>Data Nasc: </b></label>
                            <input type="date" id="CadidDataNasc" name="nmDataNasc" className="form-control" />
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="Cadcampo" id="CaddivGen">
                            <label htmlFor="CadidGenero"><b>Sexo: </b></label>
                            <select name="nmGenero" id="CadidGenero" className="form-control">
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="Cadcampo" id="CaddivCel">
                            <label htmlFor="CadidTelefones"><b>Telefone/Celular :</b></label>
                            <input type="text" id="CadidTelefones" name="nmTelefones" className="form-control" />
                        </div>



                        <div className="Cadcampo" id="CaddivCpf">
                            <label htmlFor="CadidCpf"><b>CPF: </b></label>
                            <input type="text" id="CadidCpf" name="nmCpf" className="form-control" />
                        </div>

                        <br /><br />
                        <br /><br />
                        

                        <div className="Cadcampo" id="CaddivCep">
                            <label htmlFor="CadidCep"><b>CEP: </b></label>
                            <input type="text" id="CadidCep" name="nmCep" className="form-control" />
                        </div>


                        <div className="Cadcampo" id="CaddivEstado">
                            <label htmlFor="CadidEstado"><b>Estado: </b></label>
                            <input type="text" id="CadidEstado" name="nmEstado" className="form-control" />
                        </div>


                        <div className="Cadcampo" id="CaddivCidade">
                            <label htmlFor="CadidCidade"><b>Cidade: </b></label>
                            <input type="text" id="CadidCidade" name="nmCidade" className="form-control" />
                        </div>
                        
                        <br /><br />
                        <br /><br />                       

                        <div className="Cadcampo" id="CaddivRua">
                            <label htmlFor="CadidRua"><b>Rua: </b></label>
                            <input type="text" id="CadidRua" name="nmRua" className="form-control" />
                        </div>


                        <div className="Cadcampo" id="CaddivNum">
                            <label htmlFor="CadidNumCasa"><b>Nº: </b></label>
                            <input type="number" id="CadidNumCasa" name="nmNumCasa" className="form-control" />
                        </div>

                        <div className="Cadcampo" id="CaddivBairro">
                            <label htmlFor="CadidBairro"><b>Bairro: </b></label>
                            <input type="text" id="CadidBairro" name="nmBairro" className="form-control" />
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="Cadcampo" id="CaddivEmail">
                            <label htmlFor="CadidEmail"><b>E-mail: </b></label>
                            <input type="text" id="CadidEmail" name="nmEmail" className="form-control" />
                        </div>


                        <div className="Cadcampo" id="CaddivSenha">
                            <label htmlFor="CadidSenha"><b>Crie a sua senha: </b></label>
                            <input type="password" id="CadidSenha" name="nmSenha" className="form-control" />
                        </div>


                        <div className="Cadcampo" id="CaddivCSenha">
                            <label htmlFor="CadidConfSenha"><b>Confirme sua senha</b></label>
                            <input type="password" id="CadidConfSenha" name="nmConfSenha" className="form-control" />
                        </div>

                        <br /><br />
                        <br /><br />

                        <button className="btn btn-outline-primary" type="input" id="CadidBtnCad">Cadastrar</button>
                    </fieldset>
                </div>
            </form>
        </main>
    );
}

export default Cadastro;
