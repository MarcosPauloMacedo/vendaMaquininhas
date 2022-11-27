import {Taxas} from './Taxas.js'
import {Estilo} from './Estilo.js'
import {Parcelas} from './Parcelas.js'

export class Simulacao extends Taxas{
    constructor(){
        super()

        let pegar = document.querySelector.bind(document)

        this.estilo = new Estilo()
        this.parcelas = new Parcelas()

        this.ultraTon = pegar('#botUltraTon')
        this.gigaTon = pegar('#botGigaTon')
        this.megaTon = pegar('#botMegaTon')
        this.basico = pegar('#botBasico')

        this.valorMaq = null
        this.debCred = null
        
        this.debito = pegar('#debito')
        this.credito = pegar('#credito')

        this.maquininhas = document.querySelectorAll('.ton-button')
        this.debitoCredito = document.querySelectorAll('.ton-button2')  
        
        this.parcelamento = pegar('#todasParcelas')
    }
    
    ultra (){
        this.ultraTon.addEventListener('click',()=>{
            let valor = this.ultraTon.value
            this.valorMaq = valor

            let taxas = {
                'debito': this.taxaDebito.UltraTon,
                'credito': this.taxaCredito.UltraTon
            }

            let porcentagem = {
                'debito': this.debitoPorcentagem.ultraTon,
                'credito': this.creditoPorcentagem.ultraTon
            }
            
            this.estilo.novoEstilo(valor,this.maquininhas)
            this._calcularTaxa(this.debCred,porcentagem,taxas)
        })
    }

    giga(){
        this.gigaTon.addEventListener('click',()=>{
            let valor = this.gigaTon.value
            this.valorMaq = valor

            let taxas = {
                'debito': this.taxaDebito.GigaTon,
                'credito': this.taxaCredito.GigaTon
            }

            let porcentagem = {
                'debito': this.debitoPorcentagem.gigaTon,
                'credito': this.creditoPorcentagem.gigaTon
            }

            this.estilo.novoEstilo(valor,this.maquininhas)
            this._calcularTaxa(this.debCred,porcentagem,taxas)
        })
    }

    mega(){
        this.megaTon.addEventListener('click',()=>{
            let valor = this.megaTon.value
            this.valorMaq = valor

            let taxas = {
                'debito': this.taxaDebito.MegaTon,
                'credito': this.taxaCredito.MegaTon
            }

            let porcentagem = {
                'debito': this.debitoPorcentagem.megaTon,
                'credito': this.creditoPorcentagem.megaTon
            }

            this.estilo.novoEstilo(valor,this.maquininhas)
            this._calcularTaxa(this.debCred,porcentagem,taxas)
        })
    }

    tonBasico(){
        this.basico.addEventListener('click',()=>{
            let valor = this.basico.value
            this.valorMaq = valor
    
            let taxas = {
                'debito': this.taxaDebito.Basico,
                'credito': this.taxaCredito.Basico
            }
    
            let porcentagem = {
                'debito': this.debitoPorcentagem.basico,
                'credito': this.creditoPorcentagem.basico
            }
    
            this.estilo.novoEstilo(valor,this.maquininhas)
            this._calcularTaxa(this.debCred,porcentagem,taxas)
        })
    }

    deb(){
        this.debito.addEventListener('click',()=>{
            let valor = this.debito.value
            this.debCred = valor

            let valorMaq = this.valorMaq

            if(valorMaq == 'UltraTon'){
                this.ultraDeb()
            }

            else if(valorMaq == 'GigaTon'){
                this.gigaDeb()
            }

            else if(valorMaq == 'MegaTon'){
                this.megaDeb()
            }

            else{
                this.basicoDeb()
            }

            this.estilo.novoEstilo(valor,this.debitoCredito)
            this.parcelas.formaPagamento(valor)
        })
    }

    cred(){
        this.credito.addEventListener('click',()=>{
            let valor = this.credito.value
            this.debCred = valor

            let valorMaq = this.valorMaq

            if(valorMaq == 'UltraTon'){
                this.ultraCred()
            }

            else if(valorMaq == 'GigaTon'){
                this.gigaCred()
            }

            else if(valorMaq == 'MegaTon'){
                this.megaCred()
            }

            else{
                this.basicoCred()
            }
            
            this.estilo.novoEstilo(valor,this.debitoCredito)
            this.parcelas.formaPagamento(valor)

        })
    }

    atualizar(){
        this.valorVenda.addEventListener('keyup',()=>{

            this.atualizarValor(this.debCred,this.valorMaq)
        })
    }

    tiposPagamento(){
        this.parcelamento.
        addEventListener('change',(event)=>{
            let valor = event.target.value
            let valorMaq = this.valorMaq

            if(valorMaq == 'UltraTon'){
                this.parcelas._pagamento(valor,this.parcelas.parcelasUltra)
            }

            else if(valorMaq == 'GigaTon'){
                this.parcelas._pagamento(valor,this.parcelas.parcelasGiga)
            }

            else if(valorMaq == 'MegaTon'){
                this.parcelas._pagamento(valor,this.parcelas.parcelasMega)
            }

            else{
                this.parcelas._pagamento(valor,this.parcelas.parcelasBasico)
            }
        })
    }
}
