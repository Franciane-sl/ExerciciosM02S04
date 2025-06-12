const dadosPessoais = {nome: "Lucas", idade: 30};
const endereco = {cidade: "São Paulo", estado: "SP"};

const dadoCompleto = {...dadosPessoais, ...endereco};

console.log(dadoCompleto);