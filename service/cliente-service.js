
//Estamos criando uma instancia para consumir dados para nossa aplicação
const listaDeCliente = () => {
    const promise = new Promise((resolve, reject) => {

        const http = new XMLHttpRequest()
        const url = "http://localhost:3000/profile"

        http.open('GET', url); 
        http.send();

        http.onload = () => {
            if(http.status >= 400){
                reject(JSON.parse(http.response))
            }else{
                resolve(JSON.parse(http.response))
            }
        }
    })
    console.log(promise)
    return promise
}

listaDeCliente()
.then(data => {
        data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email))
        });
});

