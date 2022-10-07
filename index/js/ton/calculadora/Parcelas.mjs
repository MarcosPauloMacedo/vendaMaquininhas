import {Taxas} from './Taxas.mjs'
import {TodasParcelas} from './todasParcelas.mjs'

export class Parcelas extends TodasParcelas{
    constructor(){
        super()
        let pegar = document.querySelector.bind(document)

        this.taxas = new Taxas()
        this.bandeira = pegar('.ton-cartao')
        this.valorVenda = pegar('#valorVenda')
        this.valorDescontado = pegar('#valorDescontado')
        this.parcelamento = pegar('#todasParcelas')
    }

    formaPagamento(valor){
        if(valor == 'debito'){
            this.parcelamento.style.display = 'none'
            this.bandeira.classList.add('ton-debito')
        }
        else{
            this.parcelamento.style.display = 'flex'
            this.bandeira.classList.remove('ton-debito')
        }
    }

    _pagamento(valor,parcelas){
        let array = Object.keys(parcelas)
        let vlr = Object.values(parcelas)
        let valorCompra = this.valorVenda.value
        console.log(valorCompra)

        array.forEach((n,i)=>{
            if(valor == array[i]){
                if(valorCompra == 0){
                    let v = 5000 - (5000 * vlr[i])
                    let real = this.taxas._formatarMoeda(v)
                    this.valorDescontado.
                    innerText = real
                }
                else {
                    let v = valorCompra - (valorCompra * vlr[i])
                    let real = this.taxas._formatarMoeda(v)
                    this.valorDescontado.
                    innerText = real
                }
            }
        })
    }
}
