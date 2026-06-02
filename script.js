let tamanhoFonte = 100;

function fecharTela() {

    document.getElementById("telaInicial")
        .style.display = "none";
}

function irPara(secao) {

    fecharTela();

    setTimeout(() => {

        document.getElementById(secao)
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 200);
}

function alternarModoEscuro() {

    document.body.classList.toggle("dark-mode");
}

function aumentarFonte() {

    if (tamanhoFonte < 140) {

        tamanhoFonte += 10;

        document.body.style.fontSize =
            tamanhoFonte + "%";
    }
}

function diminuirFonte() {

    if (tamanhoFonte > 80) {

        tamanhoFonte -= 10;

        document.body.style.fontSize =
            tamanhoFonte + "%";
    }
}

console.log("Site carregado com sucesso!");