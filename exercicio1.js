const produtos = [
    {nome: "Notebook", estoque: 4},
    {nome: "Monitor", estoque: 0},
    {nome: "Teclado", estoque: 2},
    {nome: "Mouse", estoque: 0}
];

const emEstoque = produtos.filter(produtos => produtos.estoque > 0);

console.log("O Array atualizado com somente os produtos em estoque é:", emEstoque);