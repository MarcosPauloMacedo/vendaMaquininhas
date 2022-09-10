// Criar no starUML

class Cliente{
    constructor(nome,endereco,telefone,estado){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.estado = estado
    }
}

let number = 456

let unidade = number%10
let dezena = (number%100)/10
let dez = parseInt(dezena)
let centena = number /100
let cen = parseInt(centena)

let resultado = unidade * 100 + dezena * 10 + centena
let resultadoFinal = resultado.toFixed(3)

console.log(cen)
