import React from 'react'; 




function App() {
    //const [Menu, setMenu] = React.useState(<Menu_visitante/>);

    const logado = function(){
        console.log("troca menu")
        //setMenu(<Menu_usuario/>)
    }
    //==================================================================================



    //=================================================================================
    

    return (
        <div>
            <Login logado={logado}/>
        </div>
    );
}



function Login(props) {
    return (
        <div>


                    <div className="cardGroup" id="cardGroup" >
                        <button  onClick={props.logado} /* type="submit" */>ACESSAR</button>
                    </div>

      
        </div>


    );
}



export default App;