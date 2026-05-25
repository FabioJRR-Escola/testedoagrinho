function fecharTela() {

    document.getElementById('telaInicial')
        .style.display = 'none';
}

function irPara(secao) {

    fecharTela();

    setTimeout(() => {

        document.getElementById(secao)
            .scrollIntoView({

                behavior: 'smooth'
            });

    }, 200);
}

console.log("Site carregado com sucesso!");