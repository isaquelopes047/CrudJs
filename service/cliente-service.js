
const criarNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr');

    // Colocamos o conteudo a ser criado dentro de uma constante
    const conteudo = 
    `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>   
    `
    // Pegamos a const criada acima e passamos a ela a const conteudo e exibimos com o innerHTML
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente
}
const tabela = document.querySelector('[data-tabela]')


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

