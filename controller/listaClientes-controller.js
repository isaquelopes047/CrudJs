import { clienteService } from "../service/cliente-service.js";

const criarNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');

    // Colocamos o conteudo a ser criado dentro de uma constante
    const conteudo = 
    `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>   
    `
    // Pegamos a const criada acima e passamos a ela a const conteudo e exibimos com o innerHTML
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
    let botaoDeletar = evento.target.className ==
    'botao-simples botao-simples--excluir'
    if(botaoDeletar){
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then( ()=> {
            linhaCliente.remove()
        })
    }
})

clienteService.listaDeCliente() //somente quando a promisse ser aceita ele exibe os dados
.then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email, elemento.id))
        });
})
