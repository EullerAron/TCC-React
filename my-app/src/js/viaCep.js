function viaCep() {
    const CadidCep = document.getElementById('CadidCep');

    if(CadidCep){
        CadidCep.addEventListener('blur', function () {
            console.log("viacep");
        
            let cep = document.getElementById('CadidCep').value
        
            var xhr = new XMLHttpRequest();
        
            xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/?");
        
            xhr.addEventListener("load", function () {
        
                var resposta = xhr.responseText;
        
                console.log("Resposta: " + xhr.response);
        
                var resp = JSON.parse(resposta);
        
                document.getElementById("CadidEstado").value = resp.uf;
                document.getElementById("CadidCidade").value = resp.localidade;
                document.getElementById("CadidRua").value = resp.logradouro;
                document.getElementById("CadidBairro").value = resp.bairro;
        
            });
            xhr.send()
        });
    }
    

}

export default viaCep;