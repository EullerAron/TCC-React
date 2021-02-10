import React from 'react';
import InputMask from 'react-input-mask';
import Geocode from "react-geocode";
import '../../css/editar_cadastro_usuario.css';

function Editar_Cadastro_Usuario() {
    return (
        <main id="EditCadmain-cadastroUsuario" >
            <form>{/* onSubmit={cadastrarUsuario} */}
                <div className="editForm-groupUsuario">
                    <fieldset className="EditCadUsuariofieldCadastro">
                        <h1>Editar Cadastro Usuário</h1>

                        <div id="EditCadUsuariodivImg">
                            <div className="text-center" id="EditCadUsuariodivImg2">
                                <img id="EditCadUsuarioimg_preview" src="/img/adicionar-fotos.png" alt="Image Preview" />
                                <br /><br />
                                <input type="file" id="EditCadUsuarioimg_input" className="form-control" />
                            </div>
                        </div>

                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivNome">
                            <label htmlFor="EditCadUsuarioidNome"><b>Nome: </b></label>
                            <input type="text" id="EditCadUsuarioidNome" name="nmEditUsuarioNome" className="form-control" required />
                        </div>

                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivNasc">
                            <label htmlFor="EditCadUsuarioidDataNasc"><b>Data Nasc: </b></label>
                            <input type="date" id="EditCadUsuarioidDataNasc" name="nmEditUsuarioDataNasc" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivGen">
                            <label htmlFor="EditCadUsuarioidGenero"><b>Sexo: </b></label>
                            <select name="nmEditGenero" id="EditCadUsuarioidGenero" className="form-control">
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>

                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivCel">
                            <label htmlFor="EditCadUsuarioidTelefones"><b>Telefone/Celular :</b></label>
                            <InputMask mask="(99) 9 9999-9999" id="EditCadUsuarioidTelefones" name="nmEditUsuarioTelefones" className="form-control" required />
                        </div>



                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivCpf">
                            <label htmlFor="EditCadUsuarioidCpf"><b>CPF: </b></label>
                            <InputMask mask="999.999.999-99" id="EditCadUsuarioidCpf" name="nmEditUsuarioCpf" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />


                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivCep">
                            <label htmlFor="EditCadUsuarioidCep"><b>CEP: </b></label>
                            <InputMask mask="99999-999" id="EditCadUsuarioidCep" name="nmEditUsuarioCep" className="form-control" required />
                        </div>


                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivEstado">
                            <label htmlFor="EditCadUsuarioidEstado"><b>Estado: </b></label>
                            <input type="text" id="EditCadUsuarioidEstado" name="nmEditUsuarioEstado" className="form-control" required />
                        </div>


                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivCidade">
                            <label htmlFor="EditCadUsuarioidCidade"><b>Cidade: </b></label>
                            <input type="text" id="EditCadUsuarioidCidade" name="nmEditUsuarioCidade" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivRua">
                            <label htmlFor="EditCadUsuarioidRua"><b>Rua: </b></label>
                            <input type="text" id="EditCadUsuarioidRua" name="nmEditRua" className="form-control" required />
                        </div>
                        
                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivNum">
                            <label htmlFor="EditCadUsuarioidNumCasa"><b>Nº: </b></label>
                            <input type="number" id="EditCadUsuarioidNumCasa" name="nmEditUsuarioNumCasa" className="form-control" required />
                        </div>

                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivBairro">
                            <label htmlFor="EditCadUsuarioidBairro"><b>Bairro: </b></label>
                            <input type="text" id="EditCadUsuarioidBairro" name="nmEditUsuarioBairro" className="form-control" required />
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivEmail">
                            <label htmlFor="EditCadUsuarioidEmail"><b>E-mail: </b></label>
                            <input type="text" id="EditCadUsuarioidEmail" name="nmEditUsuarioEmail" className="form-control" required />
                        </div>


                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivSenha">
                            <label htmlFor="EditCadUsuarioidSenha"><b>Crie a sua senha: </b></label>
                            <input type="password" id="EditCadUsuarioidSenha" name="nmEditUsuarioSenha" className="form-control" required />
                        </div>


                        <div className="EditCadUsuariocampo" id="EditCadUsuariodivCSenha">
                            <label htmlFor="EditCadUsuarioidConfSenha"><b>Confirme sua senha</b></label>
                            <input type="password" id="EditCadUsuarioidConfSenha" name="nmEditUsuarioConfSenha" className="form-control" required />
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

export default Editar_Cadastro_Usuario;