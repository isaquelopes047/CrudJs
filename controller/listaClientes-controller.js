import { clienteService } from "../service/cliente-service";

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


clienteService.listaDeCliente() //somente quando a promisse ser aceita ele exibe os dados
.then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email))
        });
})
