class Calculadora_PagS{
    constructor(){
        let pegar = document.querySelector.bind(document)

        this.valor = pegar('#pagSeg-valor')
        this.parcelas = pegar('#pagSeg-parcelas')
        this.pagarHora = pegar('#pagSeg-hora')
        this.pagar14 = pegar('#pagSeg-14')
        this.pagar30 = pegar('#pagSeg-30')
    }

    reset(){
        this.valor.addEventListener('keyup',()=>{
            this.pagarHora.innerText = 'R$ 0.00'
            this.pagar14.innerText = 'R$ 0.00'
            this.pagar30.innerText = 'R$ 0.00'
            this.parcelas.value = null
        })
    }

    simular(){
        let parcelas = this.parcelas
        let debito = [0.0290,0.0234,0.0654]
        let credito = [0.0554,0.0185,0.0585]
        let parcela2x = [0.0912,0.0412,0.0121]

        let pag = ['debito','credito','2x']
        let tiposPagamento = [debito,credito,parcela2x]

        pag.forEach((n,i)=>{
            parcelas.addEventListener('change',(event)=>{
                let valor = parseInt(this.valor.value)
                if(event.target.value == pag[i] && valor <= 100000){
                    this.pagarHora.innerText = (valor - (valor * tiposPagamento[i][i])).toFixed(2)
                    this.pagar14.innerText = (valor - (valor * tiposPagamento[i][1])).toFixed(2)
                    this.pagar30.innerText = (valor - (valor * tiposPagamento[i][2])).toFixed(2)
                }
            })
        })
    }
}

const pagSeguroSimular = new Calculadora_PagS()

pagSeguroSimular.reset()
pagSeguroSimular.simular()
