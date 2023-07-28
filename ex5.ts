const canjica = require('readline-sync');

let preco: number=parseFloat(canjica.question('Indique o valor do produto: '))

if (preco > 100) {

    console.log('O valor atual é : ' + (preco*1.15 ))
   
}  else if (preco > 50 || preco <= 100) { 

    console.log('O valor atual é : ' + (preco*1.10))

   
} 
else {

    console.log('O valor atual é : ' + (preco*1.5))
   
}