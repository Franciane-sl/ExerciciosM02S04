const dados = {
  nome: "João",
  idade: null,
  cidade: "São Paulo",
  email: undefined
};

Object.keys(dados).forEach(chave => {
    if (dados[chave] === null || dados[chave] === undefined) {
        delete dados [chave];
    }
});

console.log("O objeto atualizado sem as propriedades com valores null e undefined é:", dados);