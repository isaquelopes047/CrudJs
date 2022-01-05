

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