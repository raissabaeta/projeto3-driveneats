let prato;
let bebida;
let sobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;
let valorTotal;

function escolherFrango() {
    document.getElementById("Frango").style.borderColor = "green";
    document.getElementById("Frango Medio").style.borderColor = "white";
    document.getElementById("Frango Grande").style.borderColor = "white";
    document.getElementById("checkFrango").style.display = "block";
    document.getElementById("checkFrangoMedio").style.display = "none";
    document.getElementById("checkFrangoGrande").style.display = "none";
    prato = "Frango";
    valorPrato = Number(14.9);
}

function escolherFrangoMedio() {
    document.getElementById("Frango Medio").style.borderColor = "green";
    document.getElementById("Frango").style.borderColor = "white";
    document.getElementById("Frango Grande").style.borderColor = "white";
    document.getElementById("checkFrangoMedio").style.display = "block";
    document.getElementById("checkFrango").style.display = "none";
    document.getElementById("checkFrangoGrande").style.display = "none";
    prato = "Frango Medio";
    valorPrato = Number(19.9);
}

function escolherFrangoGrande() {
    document.getElementById("Frango Grande").style.borderColor = "green";
    document.getElementById("Frango Medio").style.borderColor = "white";
    document.getElementById("Frango").style.borderColor = "white";
    document.getElementById("checkFrangoGrande").style.display = "block";
    document.getElementById("checkFrango").style.display = "none";
    document.getElementById("checkFrangoMedio").style.display = "none";
    prato = "Frango Grande";
    valorPrato = Number(34.9);
}

function escolherCocaNormal() {
    document.getElementById("Coca Normal").style.borderColor = "green";
    document.getElementById("Coca Mini").style.borderColor = "white";
    document.getElementById("Coca Zero").style.borderColor = "white";
    document.getElementById("checkCoca").style.display = "block";
    document.getElementById("checkCocaMini").style.display = "none";
    document.getElementById("checkCocaZero").style.display = "none";
    bebida = "Coca";
    valorBebida = Number(4.9);
}

function escolherCocaMini() {
    document.getElementById("Coca Mini").style.borderColor = "green";
    document.getElementById("Coca Normal").style.borderColor = "white";
    document.getElementById("Coca Zero").style.borderColor = "white";
    document.getElementById("checkCocaMini").style.display = "block";
    document.getElementById("checkCoca").style.display = "none";
    document.getElementById("checkCocaZero").style.display = "none";
    bebida = "Coca Mini";
    valorBebida = Number(3.9);
}

function escolherCocaZero() {
    document.getElementById("Coca Zero").style.borderColor = "green";
    document.getElementById("Coca Normal").style.borderColor = "white";
    document.getElementById("Coca Mini").style.borderColor = "white";
    document.getElementById("checkCocaZero").style.display = "block";
    document.getElementById("checkCoca").style.display = "none";
    document.getElementById("checkCocaMini").style.display = "none";
    bebida = "Coca Zero";
    valorBebida = Number(4.9);
}

function escolherPudimPequeno() {
    document.getElementById("Pudim Pequeno").style.borderColor = "green";
    document.getElementById("Pudim Medio").style.borderColor = "white";
    document.getElementById("Pudim Grande").style.borderColor = "white";
    document.getElementById("checkPudim").style.display = "block";
    document.getElementById("checkPudimMedio").style.display = "none";
    document.getElementById("checkPudimGrande").style.display = "none";
    sobremesa = "Pudim Pequeno";
    valorSobremesa = Number(7.9);
    pedidoSelecionado();
}

function escolherPudimMedio() {
    document.getElementById("Pudim Medio").style.borderColor = "green";
    document.getElementById("Pudim Pequeno").style.borderColor = "white";
    document.getElementById("Pudim Grande").style.borderColor = "white";
    document.getElementById("checkPudimMedio").style.display = "block";
    document.getElementById("checkPudim").style.display = "none";
    document.getElementById("checkPudimGrande").style.display = "none";
    sobremesa = "Pudim Medio";
    valorSobremesa = Number(9.9);
    pedidoSelecionado();
}

function escolherPudimGrande() {
    document.getElementById("Pudim Grande").style.borderColor = "green";
    document.getElementById("Pudim Pequeno").style.borderColor = "white";
    document.getElementById("Pudim Medio").style.borderColor = "white";
    document.getElementById("checkPudimGrande").style.display = "block";
    document.getElementById("checkPudim").style.display = "none";
    document.getElementById("checkPudimMedio").style.display = "none";
    sobremesa = "Pudim Grande";
    valorSobremesa = Number(12.9);
    pedidoSelecionado();
}

function pedidoSelecionado() {
    if (prato != null && bebida != null && sobremesa != null) {
        document.getElementById("fecharPedido").style.background = "#32B72F";
        document.getElementById("fecharPedido").innerHTML = `Fechar Pedido`;
        document.getElementById("fecharPedido").style.fontFamily = "Roboto";
        document.getElementById("fecharPedido").style.fontSize = "20px";
        document.getElementById("fecharPedido").style.lineWeight = "23px";
        document.getElementById("fecharPedido").style.color = "white";
        document.getElementById("fecharPedido").style.fontWeight = "700";
    }
}

function finalizarPedido() {
    let nome = prompt("Qual seu nome?");
    let local = prompt("Qual seu endereço?");
    let mensagem;
    let valorTotal = (valorPrato + valorBebida + valorSobremesa).toFixed(2);
    mensagem =
        `Olá, gostaria de fazer o pedido:
        
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa} 
        - Total:  ${valorTotal}
        
        Nome: ${nome} 
        Endereço: ${local}`;
        mensagem = window.encodeURIComponent(mensagem);
    window.open("https://wa.me/5531996718781?text=" + mensagem);
}
