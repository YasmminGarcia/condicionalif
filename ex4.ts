const pipoca = require("readline-sync");

let velocidade: number = parseFloat(pipoca.question("Digite um numero: "));

if(velocidade > 80){
    let multa: number =  (velocidade - 80) * 7
    console.log('Você foi multado em R$' + multa);
}