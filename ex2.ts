const leitequente= require("readline-sync");

let numer1: number = parseFloat(leitequente.question("Digite um numero : "));
let numer2: number = parseFloat(leitequente.question("Digite outro numero : "));


if(numer1  >  numer2)
    console.log('o primeiro numero é o maior');
else
console.log('o numero segundo é o maior');