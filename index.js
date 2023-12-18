//Função
function calcularNivel(vitorias, derrotas){
    let resultado = vitorias - derrotas;
    let nivel;

//Condicional para determinar o nível
if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

return {resultado, nivel};
}


//Entradas
let vitorias = parseInt(prompt("Insira o numero de vitorias: "));
let derrotas = parseInt(prompt("Insira o numero de derrotas: "));

const resultadoNivel = calcularNivel(vitorias, derrotas);
console.log(`O Herói tem um saldo de ${resultadoNivel.resultado} está no nível de ${resultadoNivel.nivel}`);