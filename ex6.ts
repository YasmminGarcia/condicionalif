const meiadeseda = require("readline-sync")

let nota: number = parseFloat(meiadeseda.question("Digite sua nota: "));
let falta: number = parseFloat(meiadeseda.question("Agora me diga suas faltas: "));

if( nota < 3.9 && falta <= 20){
     console.log(`Você tem nota E em conceito`)
}else if( nota < 4.9  && falta <= 20){
    console.log(`Você tem nota D em conceito`)
}else if( nota < 7.4 && falta <= 20) {
    console.log(`Você tem nota C em conceito`)
}else if( nota < 8.9 && falta <= 20) {
    console.log(`Você tem nota B em conceito`)
}

else if( nota < 10 && falta <= 20){
    console.log(`Você tem nota A em conceito`)
}

else if( nota < 3.9 && falta > 20){ 
    console.log(`Você tem nota E em conceito`)
}

else if( nota < 4.9 && falta > 20) {
    console.log(`Você tem nota E em conceito`)
}

else if( nota < 7.4 && falta > 20) {
    console.log(`Você tem nota D em conceito`)
}

else if( nota < 8.9 && falta > 20) {
    console.log(`Você tem nota C em conceito`)
}

else if( nota < 10 && falta > 20){
    console.log(`Você tem nota B em conceito`)
}