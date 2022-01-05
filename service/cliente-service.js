

const criarNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr');


    // Colocamos o conteudo a ser criado dentro de uma constante
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

    // Pegamos a const criada acima e passamos a ela a const conteudo e exibimos com o innerHTML
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente
}

// Acessando a tabela pelo DOM
const tabela = document.querySelector('[data-tabela]')

// cria uma nova requisição
const http = new XMLHttpRequest()
const url = "http://localhost:3000/profile";

// GET vai pegar as informaçoes do profile 
// Dados do arquivo db.json - profile
http.open('GET', url); 
http.send();

// Vi apresentar as informaçoes na aplicação fronthttp.onload = () => {
    const data = JSON.parse(http.response)
    data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email))
    });

