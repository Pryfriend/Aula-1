console.log(`Trabalhando com listas`);
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

listaDeDestinos.push(`Curitiba`);// adicionando um item na lista
console.log("Distino possíveis:");
//console.log(salvador, saoPaulo, riodeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);