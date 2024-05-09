var botaoAdicionar = document.querySelector("#adicionar-encomenda");


botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault();
   console.log("Agora sim, o botão foi clicado!");
});

function Remove(){
   document.querySelectorAll('.linhasTabela').forEach(function(linha){
      linha.addEventListener('dblclick', function(){
         console.log("Remover linha?")
         var confirma = confirm("Tem certeza que deseja excluir a linha?")
         if(confirma){
            linha.remove();
         }
      });

   });
   }

   function RemoveNova(linha){

         linha.addEventListener('dblclick', function(){
            console.log("Remover Linha nova?")
            var clica = confirm("Tem certeza que deseja excluir a linha?")
            if(clica){
               linha.remove();
            }
         });
   
   
      };
   

function Nova(){
   var Tabela = document.querySelector(".tabela");

   //insere uma nova linha
   var linha = Tabela.insertRow();

   //inserir celula nas linhas
   var celula1 = linha.insertCell(0);
   var celula2 = linha.insertCell(1);
   var celula3 = linha.insertCell(2);
   var celula4 = linha.insertCell(3);
   var celula5 = linha.insertCell(4);

   var nome = document.querySelector(".idNome").value;
   var prod = document.querySelector(".idProduto").value;
   var qtd = parseInt(document.querySelector(".idQtd").value);
   var unit = parseFloat(document.querySelector(".idUnitario").value);

   celula1.textContent = nome;
   celula2.textContent = prod;
   celula3.textContent = qtd;
   celula4.textContent = formata(unit);

   RemoveNova(linha);
   

   if(validaQtd(qtd) == true){
      celula3.textContent = "QTDE INVÁLIDA!";
      celula3.style.color = "red";
   }
   else if(validaValor(unit) == true){
      celula4.textContent = "UNITÁRIO INVÁLIDO!";
      linha.style.backgroundColor = "red";
   }
   else{
      celula5.textContent = formata(calculaTotal(qtd, unit));
   }

   if(nome.length <= 0){
      celula1.textContent = "NOME NULO!"
      linha.style.backgroundColor = "red";
   }
   if(prod == "Selecione"){
      celula2.textContent = "PRODUTO INVÁLIDO";
      celula2.style.color = "red";
   }

}

Remove(Nova);