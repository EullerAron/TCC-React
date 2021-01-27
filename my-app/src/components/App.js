import React from 'react';
import Footer from './footer/Footer_principal';
import Header from './header/Menu_visitante';
import Contato from './main/Contato';
import Principal from './main/Principal';
import Login from './main/Login';
import Cadastro_usuario from './main/Cadastro_Usuario';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={Principal} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/contato" component={Contato} />
                    <Route path="/cadastro_usuario" component={Cadastro_usuario} />
                    <Route component={() => <div>Página Não Encontrada - Erro 404!</div>} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;