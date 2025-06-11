const vendas = [
    {produto: "Notebook", valor: 2500},
    {produto: "Monitor", valor: 1200},
    {produto: "Teclado", valor: 250}
];

vendas.forEach(venda => {
    console.log(`O produto ${venda.produto} custa R$ ${venda.valor}`);
})

let total = 0;

vendas.forEach(venda => {
    total += venda.valor;
})

console.log(`O total das vendas foi de R$ ${total}`);


