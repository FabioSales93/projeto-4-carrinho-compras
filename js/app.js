// //projeto que eu fiz com ajuda da IA

// // Seletores para os elementos HTML
// const produtoInput = document.getElementById('produto');
// const quantidadeInput = document.getElementById('quantidade');
// const listaProdutos = document.getElementById('lista-produtos');
// const valorTotal = document.getElementById('valor-total');

// // Variáveis para armazenar os dados
// let carrinho = [];
// let total = 0;

// function adicionar() {
//     // Capturar o produto selecionado e a quantidade
//     const produtoSelecionado = produtoInput.value;
//     const quantidade = parseInt(quantidadeInput.value);

//     // Verificar se o produto está selecionado e a quantidade é válida
//     if (!produtoSelecionado || quantidade <= 0 || isNaN(quantidade)) {
//         alert("Por favor, insira uma quantidade válida.");
//         return;
//     }

//     // Adicionar o produto ao carrinho
//     carrinho.push({ produto: produtoSelecionado, quantidade: quantidade });

//     // Atualizar a lista de produtos no carrinho
//     atualizarCarrinho();

//     // Limpar os campos de entrada
//     produtoInput.value = '';
//     quantidadeInput.value = '';
// }

// function atualizarCarrinho() {
//     // Limpar a lista de produtos atual
//     listaProdutos.innerHTML = '';

//     // Calcular o novo valor total
//     total = 0;

//     // Adicionar os itens do carrinho à lista de produtos
//     carrinho.forEach(item => {
//         const produtoElement = document.createElement('div');
//         produtoElement.classList.add('carrinho__produtos__produto');

//         const quantidadeElement = document.createElement('span');
//         quantidadeElement.classList.add('texto-azul');
//         quantidadeElement.textContent = `${item.quantidade}x`;

//         const produtoNomeElement = document.createElement('span');
//         produtoNomeElement.textContent = ` ${item.produto.split(' - ')[0]}`;

//         const precoElement = document.createElement('span');
//         precoElement.classList.add('texto-azul');
//         const preco = parseFloat(item.produto.split(' - R$')[1]);
//         precoElement.textContent = ` R$${preco}`;

//         produtoElement.appendChild(quantidadeElement);
//         produtoElement.appendChild(produtoNomeElement);
//         produtoElement.appendChild(precoElement);
//         listaProdutos.appendChild(produtoElement);

//         // Atualizar o valor total
//         total += preco * item.quantidade;
//     });

//     // Atualizar o valor total no HTML
//     valorTotal.textContent = `R$${total.toFixed(2)}`;
// }

// function limpar() {
//     // Limpar a lista de produtos atual
//     listaProdutos.innerHTML = '';

//     // Redefinir o valor total
//     total = 0;

//     // Atualizar o valor total no HTML
//     valorTotal.textContent = `R$${total.toFixed(2)}`;

//     // Limpar o array do carrinho
//     carrinho = [];
// }

//jeito feito pela alura achei mais pratico

let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (!produto || quantidade <= 0 || isNaN(quantidade)) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}
