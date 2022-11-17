console.log(`\n Trabalhando com condicionais`);
// para cmentarios Ctrl + k + c
// para tirar Ctrl + k + u
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const riodeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";


console.log("\n Distino possíveis:");
console.log(listaDeDestinos);

//     console.log("Não é maior de Idade e não posso vender");
// } //para indentar Alt + shift + f
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
//para indentar Alt + shift + f

let contador = 0
let destinoExiste = false;
while(contador<3){
    
    
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
    
    }    

} 

console.log("Destino:", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
        
}