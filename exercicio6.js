const contador = {
    valor: 0,

    incrementar() {
        this.valor += 1;
    },

    decrementar() {
        this.valor -= 1;
    },

    mostrarValor() {
        console.log(`O valor atual é ${this.valor}`);
        alert(`O valor atual é ${this.valor}`);
    }
};

let opcao;

do {
    opcao = prompt(
        "O que você deseja fazer com o contador?\n" +
        "1 - Incrementar\n" +
        "2 - Decrementar\n" +
        "3 - Mostrar valor\n" +
        "4 - Sair"
    );

    switch (opcao) {
        case "1":
            contador.incrementar();
            break;
        case "2":
            contador.decrementar();
            break;
        case "3":
            contador.mostrarValor();
            break;
        case "4":
            alert("Saindo do programa.");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
    }

} while (opcao !== "4");
