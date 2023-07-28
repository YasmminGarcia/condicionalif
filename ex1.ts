const pacoca= require("readline-sync");

let numero: number = parseFloat(pacoca.question("Digite um numero : "));

 if(numero >0) {
    console.log(" Positivo");
    
 }

    else if (numero < 0) 
        
    console.log("Negativo");
  
    else  
        
    console.log("É Zero!");   

 
 