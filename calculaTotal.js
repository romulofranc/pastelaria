var titulo = document.querySelector(".encomendas");
titulo.textContent = "Lista de encomendas";

// document.querySelector(".info-total").textContent = document.querySelector(".info-qtd").textContent *
//     document.querySelector(".info-valor").textContent;

var linhas = document.querySelectorAll(".linhasTabela");

for (var i = 0; i < linhas.length; i++) {

    //Captura o valor unitario do produto
    var unitario = parseFloat(linhas[i].querySelector(".info-valor").textContent);

    //Calcula a quantidade encomendada
    var qtde = linhas[i].querySelector(".info-qtd").textContent;

    //Valida a quantidade
    if (validaQtd(qtde) == true) {
        //Quantidade NOK, avisa o usuário
        
        linhas[i].querySelector(".info-valor").textContent = formata(unitario);
        linhas[i].querySelector(".info-qtd").textContent = "QTDE INVÁLIDA!"
        //linhas[i].style.color="red";
        linhas[i].querySelector(".info-qtd").style.color = "red";

    }
    else {
        //Calcula a quantidade encomendado
        var valor = linhas[i].querySelector(".info-valor").textContent;

        //Valida o valor unitário
        if (validaValor(valor) ==true) {
            //Quantidade NOK, avisa o usuário
            linhas[i].querySelector(".info-valor").textContent = "UNITÁRIO ERRADO!"
            //linhas[i].style.color="red";
            linhas[i].style.backgroundColor = "red";
        }
        else{
         //Quantidade OK, prossegue
        //Calcula o valor total da encomenda
        linhas[i].querySelector(".info-valor").textContent = formata(unitario);
        linhas[i].querySelector(".info-total").textContent = formata(calculaTotal(qtde, unitario));
        }
       
    }
}

//Função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario) {
    var total = 0;
    total = qtde * unitario

    return total;
}

//Função para validar a qtde
function validaQtd(qtde){
    if (qtde < 1 || isNaN(qtde)) {
        return true;
    }
}

//Função para validar o valor
function validaValor(valor){
    if (valor < 1 || isNaN(valor)) {
        return true;
    }
}

function formata(valor){
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

