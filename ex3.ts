const cachorroquente= require("readline-sync");

let ano: number = parseFloat(cachorroquente.question("Digite um ano : "));

 if(ano % 4 == 0) {
    console.log(" Esse ano é bissexto!!");
    
 }
 
 else{
    console.log("Esse ano não é bissexto!");
 }