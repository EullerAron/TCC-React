function viaCepPrincipal(callback) {

    let cep = document.getElementById('inputPri').value;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/?");

    xhr.addEventListener("load", function () {

        var resposta = xhr.responseText;

        console.log("Resposta: " + xhr.response);

        var resp = JSON.parse(resposta);

        let estado = resp.uf;
        let cidade = resp.localidade;
        let rua = resp.logradouro;
        let bairro = resp.bairro;

        callback(estado, cidade, rua, bairro)

    });
    xhr.send()

}


export default viaCepPrincipal;