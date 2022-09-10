export class Simulacao{
    constructor(){
        let pegar = document.querySelector.bind(document)
        this.botoes = document.querySelectorAll('.ton-button')
        this.valorReceber = pegar('.resultado-valor-receber')
        this.taxa = pegar('.ton-vlr-taxa')
        this.tarifa = pegar('.ton-vlr-tarifa')
        this.taxass = ['3,20%','3,69%','3,49%','4.99%']
        this.taxas = [3.20,3.69,3.49,4.99]
        this.tarifas = ['R$ 128,00','R$ 147,60','R$ 139,60','R$ 199,60']
        this.valoresReceber = ['R$ 3.872,00','R$ 3.852,40','R$ 3.860,40','R$ 3.800,40']
        this.todosBotoes = []
    }

    pegarBotoes(){
    let bot = this.botoes
    let taxas = this.taxas
    let tarifas = this.tarifas
    let tarifa = this.tarifa
    let taxa = this.taxa
    let todosBotoes = this.todosBotoes
    let valorReceber = this.valorReceber
    let valoresReceber = this.valoresReceber

    bot.forEach((n,i)=>{
        todosBotoes[i] = bot[i]
    })

    todosBotoes.forEach((n,i)=>{
        todosBotoes[i].addEventListener('click',()=>{
            taxa.innerText = taxas[i]
            tarifa.innerText = tarifas[i]
            valorReceber.innerText = valoresReceber[i]
        })
    })
    }
}
