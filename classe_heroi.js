class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia'
                break
            case 'guerreiro':
                ataque = 'espada'
                break
            case 'monge':
                ataque = 'artes marciais'
                break
            case 'ninja':
                ataque = 'shuriken'
                break
            default:
                ataque = 'ataque desconhecido';

        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let mago = new heroi('Ester', 24, 'mago')
let ninja = new heroi('Rodrigo', 25, 'ninja')

mago.atacar()
ninja.atacar()