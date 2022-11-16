import {TarifasSumup} from './Tarifas.mjs'

class Calculadora extends TarifasSumup{
   constructor(){
    super()

    this.$ = document.querySelector.bind(document)

    this.valorVenda = this.$('.smp-label')
    this.faturamento = null

    this.taxaDebito1m = this.$('#smp-tx-debito-1m')
    this.taxaCredito1m = this.$('#smp-tx-credito-1m')
    this.taxaCredito30d = this.$('#smp-tx-credito-30d')
   }

   _taxasVisaMaster(){
        let taxaDebito = this.visaMaster1m.
        nahora.debito

        let taxaCredito = this.visaMaster1m.
        nahora.credAvista

        let taxaCredParcela = this.visaMaster1m.
        aPrazo.credAvista

        console.log(taxaDebito)
        console.log(this.taxaDebito1m)

        this.taxaDebito1m.innerText = taxaDebito
        this.taxaCredito1m.innerText = taxaCredito
        this.taxaCredito30d.innerText = taxaCredParcela
    }

    selecionarVenda(){
        this.valorVenda.onchange = (event)=>{
            this.faturamento = event.target.value

            if(this.faturamento == 'ate-10mil'){
                this._taxasVisaMaster()
            }
        }
    }
}

const calculadora = new Calculadora()

calculadora.selecionarVenda()