calcularNivel(90, 37)

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let nivel

    if (vitorias <= 10) {
        nivel = 'Ferro'
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze'
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata'
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro'
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante'
    } else if (vitorias >= 91 && sal <= 100) {
        nivel = 'Lendário'
    } else if (vitorias >= 101) {
        nivel = 'Imortal'
    }

    console.log('O Herói tem saldo de ' + saldoVitorias + " e está no nível de " + nivel)
}