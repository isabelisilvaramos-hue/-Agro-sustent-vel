// script.js

// Botão interativo
const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
  alert("O Agro 4.0 une inovação e sustentabilidade para transformar o futuro!");
});

// Contador animado
let numero = document.getElementById("numero");
let contador = 0;

function aumentarNumero(){
  if(contador < 1000){
    contador += 10;
    numero.innerHTML = contador;
  }
}

setInterval(aumentarNumero, 50);

// Efeito ao enviar formulário
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event){
  event.preventDefault();

  alert("Mensagem enviada com sucesso! 🌱");
});
