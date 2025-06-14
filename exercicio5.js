const lista = [
    {nome: "Ana" , idade: 20, corFavorita: "Azul"},
    {nome: "Guilherme" , idade: 22, corFavorita: "Vermelho"},
    {nome: "João" , idade: 18, corFavorita: "Preto"},
    {nome: "Maria" , idade: 19, corFavorita: "Azul"}
]

const propriedades = ["idade", "corFavorita"];

const valores = [20,"Azul"];

function filtroDinamico (lista, propriedades, valores) {
    return lista.filter(item => {
         return propriedades.every((propriedade, index) => {
         return item[propriedade] === valores[index];
        })
    });

}

const resultado = filtroDinamico(lista, propriedades, valores);
console.log(resultado);

