function nivelDaRankeada(vitorias, derrotas) {
    //Calculo 
    let saldoDeRankeadas = vitorias - derrotas 

    //Determine o nivel com base no saldo de Vitorias 
    let nivel;

    if (saldoDeRankeadas < 10) {
        nivel = "Ferro";
    } else if (saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20) {
        nivel = "Bronze"
    } else if (saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50) {
        nivel = "Prata"
    } else if (saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80) {
        nivel = "Ouro"
    } else if (saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90) {
        nivel = "Diamante"
    } else if (saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    //Mensagem a ser exibida no final
    return "O Herói tem um saldo de " + saldoDeRankeadas + " está no nível de " + nivel
}

let vitorias = 124
let derrotas = 28
const resultado = nivelDaRankeada(vitorias, derrotas);
console.log(resultado);