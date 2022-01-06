
//Estamos criando uma instancia para consumir dados para nossa aplicação
const listaDeCliente = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json();
    })
}

export const clienteService = {
    listaDeCliente
}
