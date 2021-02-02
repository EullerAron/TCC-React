function buscaCuidadores(){
    document.getElementById("priSelect").addEventListener("change", function(e){

        var tipoCuidador = e.target.value;
        console.log(tipoCuidador);

        switch (tipoCuidador) {
            case "cachorro":
                var xhr = new XMLHttpRequest();
    
                xhr.open("POST", "/busca/cuidador_cachorro", true);
        
                // Envia a informação do cabeçalho junto com a requisição.
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
                xhr.addEventListener("load", function () {
        
                    var resposta = xhr.responseText;
        
                    console.log("Resposta: " + xhr.response);
        
                    var resp = JSON.parse(resposta);
        
                    if (resp.error){
                        console.log(resp.error);
                    } else {
        
                    }
                    
                });
        
                xhr.send("tipoCuidador="+tipoCuidador);
                break;
        
            case "crianca":
                var xhr = new XMLHttpRequest();
    
                xhr.open("POST", "/busca/cuidador_crianca", true);
        
                // Envia a informação do cabeçalho junto com a requisição.
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
                xhr.addEventListener("load", function () {
        
                    var resposta = xhr.responseText;
        
                    console.log("Resposta: " + xhr.response);
        
                    var resp = JSON.parse(resposta);
        
                    if (resp.error){
                        console.log(resp.error);
                    } else {
        
                    }
                    
                });
        
                xhr.send("tipoCuidador="+tipoCuidador);
                break;

            case "idoso":
                var xhr = new XMLHttpRequest();
    
                xhr.open("POST", "/busca/cuidador_idoso", true);
        
                // Envia a informação do cabeçalho junto com a requisição.
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
                xhr.addEventListener("load", function () {
        
                    var resposta = xhr.responseText;
        
                    console.log("Resposta: " + xhr.response);
        
                    var resp = JSON.parse(resposta);
        
                    if (resp.error){
                        console.log(resp.error);
                    } else {
        
                    }
                    
                });
        
                xhr.send("tipoCuidador="+tipoCuidador); 
                break;
        }



    })
}

export default buscaCuidadores;