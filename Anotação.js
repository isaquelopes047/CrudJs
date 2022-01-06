

// HTTP REQUEST

// cria uma nova requisição
const http = new XMLHttpRequest()
const url = "http://localhost:3000/profile"

// GET vai pegar as informaçoes do profile 
// Dados do arquivo db.json - profile
http.open('GET', url); 
http.send();

// Vi apresentar as informaçoes na aplicação front
http.onload = () => { // a função sera executada emediatamento ao carregar pagina
    const data = JSON.parse(http.response) 
    data.forEach(elemento => {
        
    });
}

// PROMISE

/* Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa")
representa um valor que pode estar disponível agora ou futuro
Ao inves de encadear varias funçoes de callback, podemos usar a promise, isso facilita 
a manutenção do codigo*/

const promise = new Promise((correto, erro) => {
    // função
})

//Estamos criando uma instancia para consumir dados para nossa aplicação
const listaDeCliente = () => {
    const promise = new Promise((resolve, reject) => {

        const http = new XMLHttpRequest()
        const url = "http://localhost:3000/profile"

        http.open('GET', url); 

        http.onload = () => {
            if(http.status >= 400){
                reject(JSON.parse(http.response))
            }else{
                resolve(JSON.parse(http.response))
            }
        }
        http.send();
    })
    console.log(promise)
    return promise
}
listaDeCliente().then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email))
        });
})