const OPERACAO = {
  ADICIONAR: 'ADICIONAR',
  SUBTRAIR: 'SUBTRAIR' 
};

let formulario = document.querySelectorAll(".formulario-corpo");
let comprar = document.querySelectorAll(".butoom-comprar");
let vender = document.querySelectorAll(".butoom-vender");
let coracao = document.querySelector(".bi-suit-heart-fill");

let botaoDiminuir = document.querySelector(".bi-file-minus");
let botaoAumentar = document.querySelector(".bi-plus-square");
let valorElement = document.querySelector(".valor-dinheiro");
let resultadoElement = document.querySelector("#valor-dinheiro-total");

let aumentar = document.querySelector(".bi-plus-square");
let textoMoeda = document.querySelector(".quantidade-dinheiro");

let quantidadeMoeda = parseInt(textoMoeda.textContent);
let diminuir = document.querySelector(".bi-file-minus");

let botaoComprar = document.querySelector("#butoom-comprar");
let botaoVender = document.querySelector("#butoom-vender");

let valorMonetarioBase = 126667.89;

/**
 * Reseta valor do contador
 */
function resetarContador() {
  quantidadeMoeda = 1;
  textoMoeda.textContent = quantidadeMoeda;

  formatarValorResultado(valorMonetarioBase);
}

aumentar.addEventListener("click", function () {
  const valorModificado = modificarValor(OPERACAO.ADICIONAR);
  formatarValorResultado(valorModificado);
});

diminuir.addEventListener("click", function () {
  if (Number.parseInt(quantidadeMoeda) > 1) {
   const valorModificado = modificarValor(OPERACAO.SUBTRAIR);
   formatarValorResultado(valorModificado);
  } else {
  showModal("ATENÇÃO!\n A quantidade não pode ser inferior a 1" );
  }
});

coracao.addEventListener("click", function (event) {
  if (event.target.nodeName === "I") {
    event.target.classList.toggle("color-red");
  }
});

function modificarValor(operation) {
  let numeroArmazenado = 0;

  if(operation === OPERACAO.ADICIONAR) {
    quantidadeMoeda++;
  } else if(operation === OPERACAO.SUBTRAIR) {
    quantidadeMoeda--;
  }
  
  textoMoeda.innerHTML = quantidadeMoeda;

  numeroArmazenado = valorMonetarioBase * quantidadeMoeda;

  return numeroArmazenado;
}

/**
 * Format o resultado que será exibido na tela
 */
function formatarValorResultado(valor) {
  resultadoElement.textContent = formataMonetario(valor)
    
}

function formataMonetario(valor) {
  return "R$ " +
  valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}


botaoComprar.addEventListener("click", function () {

  showModal("Compra efetuada com sucesso!" );

  resetarContador();
});

botaoVender.addEventListener("click", function () {
  
  showModal("Venda efetuada com sucesso!" );
  resetarContador();
});


 //exibir o modal 
 function showModal(text) {
  alert(text);
}


function inicializao() {
  valorElement.innerHTML = formataMonetario(valorMonetarioBase);
  resultadoElement.innerHTML = formataMonetario(valorMonetarioBase);
}

inicializao();