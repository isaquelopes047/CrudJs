

const criarNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')

    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>   
    `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}
const tabela = document.querySelector('[data-tabela]')



// cria uma nova requisição
const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/profile'); 
// GET vai pegar as informaçoes do profile 
// Dados do arquivo db.json - profile

http.send();

// Mostra as informaçoes na aplicação 
http.onload = () => {
    const data = JSON.parse(http.response)
    data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email))
    });
}

