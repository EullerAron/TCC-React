import React from 'react';
import Footer from './footer/Footer_principal';
import Contato from './main/Contato';
import Principal from './main/Principal';
import Cadastro from './main/Cadastro';
import Cadastro_Cuidador from './main/Cadastro_Cuidador';
import Cadastro_Cachorro from './main/Cadastro_Cachorro';
import Cadastro_Idoso from './main/Cadastro_Idoso';
import Cadastro_Crianca from './main/Cadastro_Crianca';
import Login from './main/Login';
import Menu_visitante from './header/Menu_visitante'
import Menu_usuario from './header/Menu_usuario'

import { Route, Switch, BrowserRouter } from 'react-router-dom';


function App() {
    const [idUsuario, setIdUsuario] = React.useState("");
    const [Menu, setMenu] = React.useState(<Menu_visitante/>);

    const logado = function(){
        setMenu(<Menu_usuario deslogado={deslogado}/>)
    }
    const deslogado = function(){
        setMenu(<Menu_visitante/>)
    }

    return (
        <div>
            <BrowserRouter>
                {Menu}
                <Switch>
                    <Route path="/" component={Principal} exact />
                    <Route path="/login" render={(props) => <Login {...props} logado={logado}/>} />
                    <Route path="/contato" component={Contato} />
                    <Route path="/cadastro" component={Cadastro} />
                    <Route path="/cad_cuidador" render={(props) => <Cadastro_Cuidador {...props} setIdUsuario={setIdUsuario}/>} />
                    <Route path="/cad_crianca" component={Cadastro_Crianca}/>
                    <Route path="/cad_idoso" component={Cadastro_Idoso}/>
                    <Route path="/cad_cachorro" component={Cadastro_Cachorro}/>
                    <Route component={() => <div>Página Não Encontrada - Erro 404!</div>} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;