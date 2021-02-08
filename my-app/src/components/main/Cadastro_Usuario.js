import React, { useEffect } from 'react';
import '../../css/cadastro.css';
import viaCep from '../../js/viaCep';
import InputMask from "react-input-mask";
import Geocode from "react-geocode";
import { Redirect } from 'react-router-dom';

function Cadastro_Usuario(props) {
     const [ logado, setLogado ] = React.useState(false);
    const [cadInfo, setCadInfo] = React.useState("");

    const [lat, setlat] = React.useState(0);
    const [lng, setlng] = React.useState(0);

    useEffect(() => {
        viaCep();
        const latLng = document.getElementById('CadidNumCasa');

        if (latLng) {
            latLng.addEventListener('blur', function () {

                var estado = document.getElementById("CadidEstado").value;
                var cidade = document.getElementById("CadidCidade").value;
                var rua = document.getElementById("CadidRua").value;
                var numero = document.getElementById("CadidNumCasa").value;
                var bairro = document.getElementById("CadidBairro").value;
    
                var localidade = estado + " " + cidade + " " + bairro + " " + rua + " " + numero
    
    
                async function Geocoder(localidade) {
                    Geocode.setApiKey("AIzaSyD20-tjmRve02av9mLpPzJsPKQ7wt3R-RA");
    
                await (Geocode.fromAddress(localidade)).then(
                    response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        console.log(lat, lng);
                        setlat(lat)
                        setlng(lng)
                    }
                )
        
                }
                Geocoder(localidade)
                console.log("State: "+ lat + lng)
                
            });
        }
    });

    const cadastrarUsuario = function () {

        var nome = document.getElementById("CadidNome").value;
        var dataNasc = document.getElementById("CadidDataNasc").value;
        var senha = document.getElementById("CadidSenha").value;
        var genero = document.getElementById("CadidGenero").value;
        var telefone = document.getElementById("CadidTelefones").value;
        var CPF = document.getElementById("CadidCpf").value;
        var email = document.getElementById("CadidEmail").value;
        var tipoUsuario = "cliente";
        var cep = document.getElementById("CadidCep").value;
        var estado = document.getElementById("CadidEstado").value;
        var cidade = document.getElementById("CadidCidade").value;
        var rua = document.getElementById("CadidRua").value;
        var numero = document.getElementById("CadidNumCasa").value;
        var bairro = document.getElementById("CadidBairro").value;
        var latitude = lat;
        var longitude = lng;

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "/cadastro/cliente", true);

        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.addEventListener("load", function () {

            var resposta = xhr.responseText;

            console.log("Resposta: " + xhr.response);

            var respostaJson = JSON.parse(resposta);

            console.log("acessando o user: " + respostaJson.id);

            if (respostaJson.error){
                setCadInfo(respostaJson.error);
                console.log(respostaJson.error);

            } else {
                //grava o token e o tipo de usuario no localstorage
                localStorage.setItem('token', respostaJson.token);
                localStorage.setItem('tipoUsuario', respostaJson.user.tipoUsuario);

                //muda o menu p logado
                props.logado();
                
                //redireciona p pag inical
                setLogado(true);
            }
            
        });

        xhr.send("nome="+nome+"&dataNasc="+dataNasc+"&senha="+senha+"&genero="+genero+"&telefone="+telefone
        +"&CPF="+CPF+"&email="+email+"&tipoUsuario="+tipoUsuario+"&cep="+cep+"&estado="+estado+"&cidade="+cidade
        +"&rua="+rua+"&numero="+numero+"&bairro="+bairro+"&latitude="+latitude+"&longitude="+longitude);

    }
    if (logado){
        return <Redirect push to="/" />;
    }

   

    if (logado){
        return <Redirect push to="/" />;
    }

    return (
        <main id="Cadmain-cadastro" >
            <form onSubmit={cadastrarUsuario}>
                <div className="form-group">
                    <fieldset className="CadfieldCadastro">
                        <h1>Cadastro</h1>

                        <div id="CaddivImg">
                            <div className="text-center" id="CaddivImg2">
                                <img id="Cadimg_preview" src="/img/adicionar-fotos.png" alt="Image Preview" />
                                <br /><br />
                                <input type="file" id="Cadimg_input" className="form-control"/>
                            </div>
                        </div> 

                        <div className="Cadcampo" id="CaddivNome">
                            <label htmlFor="CadidNome"><b>Nome: </b></label>
                            <input type="text" id="CadidNome" name="nmNome" className="form-control" required/>
                        </div>

                        <div className="Cadcampo" id="CaddivNasc">
                            <label htmlFor="CadidDataNasc"><b>Data Nasc: </b></label>
                            <input type="date" id="CadidDataNasc" name="nmDataNasc" className="form-control" required/>
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
                            <InputMask mask="(99) 9 9999-9999" id="CadidTelefones" name="nmTelefones" className="form-control" required/>
                        </div>



                        <div className="Cadcampo" id="CaddivCpf">
                            <label htmlFor="CadidCpf"><b>CPF: </b></label>
                            <InputMask mask="999.999.999-99" id="CadidCpf" name="nmCpf" className="form-control" required/>
                        </div>

                        <br /><br />
                        <br /><br />


                        <div className="Cadcampo" id="CaddivCep">
                            <label htmlFor="CadidCep"><b>CEP: </b></label>
                            <InputMask mask="99999-999" id="CadidCep" name="nmCep" className="form-control" required/>
                        </div>


                        <div className="Cadcampo" id="CaddivEstado">
                            <label htmlFor="CadidEstado"><b>Estado: </b></label>
                            <input type="text" id="CadidEstado" name="nmEstado" className="form-control" required/>
                        </div>


                        <div className="Cadcampo" id="CaddivCidade">
                            <label htmlFor="CadidCidade"><b>Cidade: </b></label>
                            <input type="text" id="CadidCidade" name="nmCidade" className="form-control" required/>
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="Cadcampo" id="CaddivRua">
                            <label htmlFor="CadidRua"><b>Rua: </b></label>
                            <input type="text" id="CadidRua" name="nmRua" className="form-control" required/>
                        </div>


                        <div className="Cadcampo" id="CaddivNum">
                            <label htmlFor="CadidNumCasa"><b>Nº: </b></label>
                            <input type="number" id="CadidNumCasa" name="nmNumCasa" className="form-control" required/>
                        </div>

                        <div className="Cadcampo" id="CaddivBairro">
                            <label htmlFor="CadidBairro"><b>Bairro: </b></label>
                            <input type="text" id="CadidBairro" name="nmBairro" className="form-control" required/>
                        </div>

                        <br /><br />
                        <br /><br />

                        <div className="Cadcampo" id="CaddivEmail">
                            <label htmlFor="CadidEmail"><b>E-mail: </b></label>
                            <input type="text" id="CadidEmail" name="nmEmail" className="form-control" required/>
                        </div>


                        <div className="Cadcampo" id="CaddivSenha">
                            <label htmlFor="CadidSenha"><b>Crie a sua senha: </b></label>
                            <input type="password" id="CadidSenha" name="nmSenha" className="form-control" required/>
                        </div>


                        <div className="Cadcampo" id="CaddivCSenha">
                            <label htmlFor="CadidConfSenha"><b>Confirme sua senha</b></label>
                            <input type="password" id="CadidConfSenha" name="nmConfSenha" className="form-control" required/>
                        </div>

                        <br /><br />
                        <br /><br />
                        <span id="cadInfo">{cadInfo}</span>
                        <button className="btn btn-outline-primary" type="button" id="CadidBtnCad" onClick={cadastrarUsuario}>Cadastrar</button>

                    </fieldset>
                </div>
            </form>
        </main>
    );
}

export default Cadastro_Usuario;