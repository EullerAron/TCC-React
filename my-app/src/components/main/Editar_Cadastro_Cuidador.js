import React from 'react';
import InputMask from 'react-input-mask';
import './../../css/editar_cadastro_cuidador.css';

function Editar_Cadastro_Cuidador() {
    return (
        <main id="EditCadmain-cadastroCuidador" >
            <form>{/* onSubmit={cadastrarUsuario} */}
                <div className="editForm-groupCuidador">
                    <fieldset className="EditCadCuidadorfieldCadastro">
                        <h1>Editar Cadastro Cuidador</h1>

                        <div id="EditCadCuidadordivImg">
                            <div className="text-center" id="EditCadCuidadordivImg2">
                                <img id="EditCadCuidadorimg_preview" src="/img/adicionar-fotos.png" alt="Image Preview" />
                                <br /><br />
                                <input type="file" id="EditCadCuidadorimg_input" className="form-control" />
                            </div>
                        </div>

                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivNome">
                            <label htmlFor="EditCadCuidadoridNome"><b>Nome: </b></label>
                            <input type="text" id="EditCadCuidadoridNome" name="nmEditCuidadorNome" className="form-control" required />
                        </div>

                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivNasc">
                            <label htmlFor="EditCadCuidadoridDataNasc"><b>Data Nasc: </b></label>
                            <input type="date" id="EditCadCuidadoridDataNasc" name="nmEditCuidadorDataNasc" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivGen">
                            <label htmlFor="EditCadCuidadoridGenero"><b>Sexo: </b></label>
                            <select name="nmEditCuidadorGenero" id="EditCadCuidadoridGenero" className="form-control">
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivCel">
                            <label htmlFor="EditCadCuidadoridTelefones"><b>Telefone/Celular :</b></label>
                            <InputMask mask="(99) 9 9999-9999" id="EditCadCuidadoridTelefones" name="nmEditCuidadorTelefones" className="form-control" required />
                        </div>



                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivCpf">
                            <label htmlFor="EditCadCuidadoridCpf"><b>CPF: </b></label>
                            <InputMask mask="999.999.999-99" id="EditCadCuidadoridCpf" name="nmEditCuidadorCpf" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />


                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivCep">
                            <label htmlFor="EditCadidCep"><b>CEP: </b></label>
                            <InputMask mask="99999-999" id="EditCadCuidadoridCep" name="nmEditCuidadorCep" className="form-control" required />
                        </div>


                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivEstado">
                            <label htmlFor="EditCadCuidadoridEstado"><b>Estado: </b></label>
                            <input type="text" id="EditCadCuidadoridEstado" name="nmEditCuidadorEstado" className="form-control" required />
                        </div>


                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivCidade">
                            <label htmlFor="EditCadCuidadoridCidade"><b>Cidade: </b></label>
                            <input type="text" id="EditCadCuidadoridCidade" name="nmEditCuidadorCidade" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivRua">
                            <label htmlFor="EditCadCuidadoridRua"><b>Rua: </b></label>
                            <input type="text" id="EditCadCuidadoridRua" name="nmEditCuidadorRua" className="form-control" required />
                        </div>


                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivNum">
                            <label htmlFor="EditCadCuidadoridNumCasa"><b>Nº: </b></label>
                            <input type="number" id="EditCadCuidadoridNumCasa" name="nmEditCuidadorNumCasa" className="form-control" required />
                        </div>

                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivBairro">
                            <label htmlFor="EditCadCuidadoridBairro"><b>Bairro: </b></label>
                            <input type="text" id="EditCadCuidadoridBairro" name="nmEditCuidadorBairro" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivEmail">
                            <label htmlFor="EditCadCuidadoridEmail"><b>E-mail: </b></label>
                            <input type="text" id="EditCadCuidadoridEmail" name="nmEditCuidadorEmail" className="form-control" required />
                        </div>


                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivSenha">
                            <label htmlFor="EditCadCuidadoridSenha"><b>Crie a sua senha: </b></label>
                            <input type="password" id="EditCadCuidadoridSenha" name="nmEditCuidadorSenha" className="form-control" required />
                        </div>


                        <div className="EditCadCuidadorcampo" id="EditCadCuidadordivCSenha">
                            <label htmlFor="EditCadCuidadoridConfSenha"><b>Confirme sua senha</b></label>
                            <input type="password" id="EditCadCuidadoridConfSenha" name="nmEditCuidadorConfSenha" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />
                        {/* <span id="EditcadInfo">{cadInfo}</span>
                        <button className="btn btn-outline-primary" type="button" id="EditCadidBtnCad" onClick={cadastrarUsuario}>Editar Cadastrar</button> */}

                    </fieldset>
                </div>
            </form>
        </main>

    );
}

export default Editar_Cadastro_Cuidador;