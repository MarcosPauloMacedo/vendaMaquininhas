import {Taxas} from './Safra-tarifas.js'

export class Calculadora extends Taxas{
    constructor(){
        super()
        let pegar = document.querySelector.bind(document)

        this.valorRecebido = pegar('#valorRecebido')
        this.receberValor = pegar('#receberValor')
        this.bandeirasCartao = pegar('#safra-tipoCartao')
        this.prazosRecebimento = pegar('#safra-prazos')
        this.taxaDeb = pegar('#precoTaxa')
        this.taxaCred = pegar('#precoTaxaCred')
        this.tarifaDeb = pegar('#taxa-safraDeb')
        this.tarifaCred = pegar('#taxa-safraCred')
        this.pix = pegar('#pix-safra')

        this.valorMaquininha = 'outrasMaquininhas'
        this.valorRecebimento = 'receberHora'
    }

    _valorMinimo(valor){
        if(valor == 0){
           return valor = 150
        }
        else{
            return valor
        }
    }

    _converterReal(valor){
        return valor.toLocaleString('pt-BR',
        {style:'currency',currency: 'BRL'})
    }

    _vlrRecebido(){
        let vlr = this._valorMinimo(this.receberValor.value)
        let valor = vlr
        let converter = valor - valor * 0
        let real = this._converterReal(converter)

        this.valorRecebido.innerText = `Se vender ${real}, você recebe:`
    }

    _outrasMaquininhas(){
        let vlr = this._valorMinimo(this.receberValor.value)

        let valor = vlr
        let prazos = Object.keys(this.outrasMaquininhas)
        let todasTaxas = Object.values(this.outrasMaquininhas)
        let todasTarifas = Object.values(this.outrasMaqTarifas)

        prazos.forEach((n,i)=>{
            if(this.valorRecebimento == n){
                let taxa = Object.values(todasTaxas[i])
                let tarifas = Object.values(todasTarifas[i])

                let converterDeb = valor - valor * taxa[0]
                let converterCred = valor - valor * taxa[1]
                let converterPix = valor - valor * 0

                let tarifaDeb = tarifas[0]
                let tarifaCred = tarifas[1]

                let realDeb = this._converterReal(converterDeb)
                let realCred = this._converterReal(converterCred)
                let pix = this._converterReal(converterPix)

                this.taxaDeb.innerText = realDeb
                this.taxaCred.innerText = realCred

                this.tarifaDeb.innerText = tarifaDeb
                this.tarifaCred.innerText = tarifaCred
                this.pix.innerText = pix
            }
        })
    }

    _visaMaster(){
        let vlr = this._valorMinimo(this.receberValor.value)

        let valor = vlr
        let prazos = Object.keys(this.visaMastercard)
        let todasTaxas = Object.values(this.visaMastercard)
        let todasTarifas = Object.values(this.visaMasterTarifa)

        prazos.forEach((n,i)=>{
            if(this.valorRecebimento == n){
                let taxa = Object.values(todasTaxas[i])
                let tarifas = Object.values(todasTarifas[i])

                let converterDeb = valor - valor * taxa[0]
                let converterCred = valor - valor * taxa[1]
                let converterPix = valor - valor * 0

                let tarifaDeb = tarifas[0]
                let tarifaCred = tarifas[1]

                let realDeb = this._converterReal(converterDeb)
                let realCred = this._converterReal(converterCred)
                let pix = this._converterReal(converterPix)

                this.taxaDeb.innerText = realDeb
                this.taxaCred.innerText = realCred

                this.tarifaDeb.innerText = tarifaDeb
                this.tarifaCred.innerText = tarifaCred
                this.pix.innerText = pix
            }
        })
    }

    converterValor(){
        this.receberValor.addEventListener('keyup',()=>{
            this._vlrRecebido()

            if(this.valorMaquininha == 'outrasMaquininhas'){
                this._outrasMaquininhas()
            }
            else{
                this._visaMaster()
            }
        })
    }

    tipoCartao(){
        this.bandeirasCartao.addEventListener('change',(event)=>{
            let evento = event.target.value
            this.valorMaquininha = evento
            console.log(evento)

            if(evento == 'outrasMaquininhas'){
                this._outrasMaquininhas()
            }
            else{
                this._visaMaster()
            }
        })
    } 

    todosPrazos(){
        this.prazosRecebimento.addEventListener('change',(event)=>{
            let valor = event.target.value
            this.valorRecebimento = valor
            console.log(valor)

            if(this.valorMaquininha == 'outrasMaquininhas'){
                this._outrasMaquininhas()
            }
            else{
                this._visaMaster()
            }
        })
    }
}