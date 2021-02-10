import React from 'react';
import Footer from './footer/Footer_principal';
import Contato from './main/Contato';
import Principal from './main/Principal';
import Cadastro_Usuario from './main/Cadastro_Usuario';
import Cadastro_Cuidador from './main/Cadastro_Cuidador';
import Cadastro_Cachorro from './main/Cadastro_Cachorro';
import Cadastro_Idoso from './main/Cadastro_Idoso';
import Cadastro_Crianca from './main/Cadastro_Crianca';
import Login from './main/Login';
import Menu_visitante from './header/Menu_visitante';
import Busca_Cuidador from './main/Busca_Cuidador';
import Solicitacoes from './main/Solicitacoes';
import Menu_Usuario_Cliente from './header/Menu_Usuario_Cliente';
import Menu_Usuario_Cuidador from './header/Menu_Usuario_Cuidador';
import Quem_Somos from './main/Quem_Somos';
import Servicos from './main/Servicos';
import Perfil_Cuidador from './main/Perfil_Cuidador';
import Editar_Cadastro_Usuario from './main/Editar_Cadastro_Usuario';
import Editar_Cadastro_Cuidador from './main/Editar_Cadastro_Cuidador';


import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
    //passa informações da tela inical para tela de busca 
    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const [tipoCuidado, setTipoCuidado] = React.useState(0);

    //repassa o id do usuario no cadastro de cuidador 
    const [idUsuario, setIdUsuario] = React.useState("");

    const [Menu, setMenu] = React.useState(<Menu_visitante/>);

    const tipoUsuario = localStorage.getItem("tipoUsuario");
    const token = localStorage.getItem("token");

    const logado = function(){
        if (tipoUsuario == "cuidador"){
            setMenu(<Menu_Usuario_Cuidador deslogado={deslogado}/>);
        } else {
            setMenu(<Menu_Usuario_Cliente deslogado={deslogado}/>);
        }          
    }

    const deslogado = function(){
        localStorage.clear();
        setMenu(<Menu_visitante/>)
    }

    return (
        <div>
            <BrowserRouter>
                {Menu}
                <Switch>
                    <Route path="/" render={(props) => <Principal {...props} latitude={latitude} setLatitude={setLatitude} setLongitude={setLongitude} longitude={longitude} tipoCuidado={tipoCuidado} setTipoCuidado={setTipoCuidado}/>} exact/>
                    <Route path="/login" render={(props) => <Login {...props} logado={logado}/>} />
                    <Route path="/contato" component={Contato} />
                    <Route path="/cadastro" render={(props) => <Cadastro_Usuario {...props} logado={logado}/>} />
                    <Route path="/cad_cuidador" render={(props) => <Cadastro_Cuidador {...props} setIdUsuario={setIdUsuario} idUsuario={idUsuario}/>} />
                    <Route path="/cad_crianca" render={(props) => <Cadastro_Crianca {...props} setIdUsuario={setIdUsuario} idUsuario={idUsuario}/>}/>
                    <Route path="/cad_idoso" render={(props) => <Cadastro_Idoso {...props} setIdUsuario={setIdUsuario} idUsuario={idUsuario} logado={logado}/>}/>
                    <Route path="/cad_cachorro" render={(props) => <Cadastro_Cachorro {...props} setIdUsuario={setIdUsuario} idUsuario={idUsuario}/>}/>
                    <Route path="/busca_cuidador" render={(props) => <Busca_Cuidador {...props} latitude={latitude} setLatitude={setLatitude} setLongitude={setLongitude} longitude={longitude} tipoCuidado={tipoCuidado} setTipoCuidado={setTipoCuidado}/>} />
                    <Route path="/solicitacoes" component={Solicitacoes} />
                    <Route path="/quem_somos" component={Quem_Somos} />
                    <Route path="/servicos" component={Servicos} />
                    <Route path="/perfil_cuidador" component={Perfil_Cuidador} />
                    <Route path="/Editar_Cadastro_Usuario" component={Editar_Cadastro_Usuario} />
                    <Route path="/Editar_Cadastro_Cuidador" component={Editar_Cadastro_Cuidador} />
                    <Route component={() => <div>Página Não Encontrada - Erro 404!</div>} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;