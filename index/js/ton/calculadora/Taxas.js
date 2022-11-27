export class Taxas{
    constructor(){
        let pegar = document.querySelector.bind(document)

        this.taxaDebito = {
            'UltraTon':0.0139,
            'GigaTon':0.0179,
            'MegaTon':0.0169,
            'Basico':0.0199
        }

        this.taxaCredito = {
            'UltraTon':0.0320,
            'GigaTon':0.0369,
            'MegaTon':0.0349,
            'Basico':0.0499
        }

        this.creditoPorcentagem = {
            'ultraTon':'3,20%',
            'gigaTon':'3,69%',
            'megaTon':'3,49%',
            'basico':'4,99%'
        }

        this.debitoPorcentagem = {
            'ultraTon':'1,39%',
            'gigaTon':'1,79%',
            'megaTon':'1,69%',
            'basico':'1,99%'
        }

        this.tonTaxa = pegar('#tonTaxa')
        this.tonTarifa = pegar('#tonTarifa')
        this.valorDescontado = pegar('#valorDescontado')
        this.valorVenda = document.querySelector('#valorVenda')
    }

    _formatarMoeda(valor){

        return valor.toLocaleString('pt-BR',
        {style:'currency',currency: 'BRL'})
    }

    _calcularTaxa(debCred,porcentagem,taxa){

        if(debCred == 'debito'){  
            this.tonTaxa.innerText = porcentagem.debito

            if(this.valorVenda.value == 0){
                let formula = 5000 - (5000 * taxa.debito)
                let real = this._formatarMoeda(formula)

                this.valorDescontado.innerText = real
                
                let tarifa = 5000 * taxa.debito
                let tReal = this._formatarMoeda(tarifa)

                this.tonTarifa.innerText = tReal
            }

            else{
                let v = this.valorVenda.value - (this.
                    valorVenda.value * taxa.debito)

                let real = this._formatarMoeda(v)
                this.valorDescontado.innerText = real

                let tarifa = this.valorVenda.value * taxa.debito
                let tReal = this._formatarMoeda(tarifa)
                this.tonTarifa.innerText = tReal
            }
        }

        else{
            this.tonTaxa.innerText = porcentagem.credito

            if(this.valorVenda.value == 0){

                let formula = 5000 - (5000 * taxa.credito)
                let real = this._formatarMoeda(formula)

                this.valorDescontado.
                innerText = real

                let tarifa = 5000 * taxa.credito
                let tReal = this._formatarMoeda(tarifa)

                this.tonTarifa.innerText = tReal
            }
            else{
                let v = this.valorVenda.value - (this.
                    valorVenda.value * taxa.credito)

                let real = this._formatarMoeda(v)
                this.valorDescontado.innerText = real
                
                let tarifa = this.valorVenda.value * taxa.credito
                let tReal = this._formatarMoeda(tarifa)
                this.tonTarifa.innerText = tReal
            }
        }
    }
    _condicao(taxa){

        if(this.valorVenda.value == 0){
            let formatar = 5000 - (5000 * taxa)
            let real = this._formatarMoeda(formatar)
            this.valorDescontado.innerText = real

            let tarifa = 5000 * taxa
            let tReal = this._formatarMoeda(tarifa)
            this.tonTarifa.innerText = tReal
        }

        else{
            let formatar = this.valorVenda.value - (this.valorVenda.
                value * taxa)

            let real = this._formatarMoeda(formatar)
            this.valorDescontado.innerText = real

            let tarifa = this.valorVenda.value * taxa
            let tReal = this._formatarMoeda(tarifa)
            this.tonTarifa.innerText = tReal
        }
    }

    ultraDeb(){
        let taxa = this.taxaDebito.UltraTon
        this.tonTaxa.innerText = this.debitoPorcentagem.ultraTon

        this._condicao(taxa)
    }

    gigaDeb(){
        let taxa = this.taxaDebito.GigaTon
        this.tonTaxa.innerText = this.debitoPorcentagem.gigaTon

        this._condicao(taxa)
    }

    megaDeb(){
        let taxa = this.taxaDebito.MegaTon
        this.tonTaxa.innerText = this.debitoPorcentagem.megaTon

        this._condicao(taxa)
    }

    basicoDeb(){
        let taxa = this.taxaDebito.Basico
        this.tonTaxa.innerText = this.debitoPorcentagem.basico

        this._condicao(taxa)
    }

    ultraCred(){
        let taxa = this.taxaCredito.UltraTon
        this.tonTaxa.innerText = this.creditoPorcentagem.ultraTon

        this._condicao(taxa)
    }

    gigaCred(){
        let taxa = this.taxaCredito.GigaTon
        this.tonTaxa.innerText = this.creditoPorcentagem.gigaTon

        this._condicao(taxa)
    }

    megaCred(){
        let taxa = this.taxaCredito.MegaTon
        this.tonTaxa.innerText = this.creditoPorcentagem.megaTon

        this._condicao(taxa)
    }

    basicoCred(){
        let taxa = this.taxaCredito.Basico
        this.tonTaxa.innerText = this.creditoPorcentagem.basico

        this._condicao(taxa)
    }

    atualizarValor(debCred,valorMaq){
       
        if(debCred == 'debito'){
            let array = Object.keys(this.taxaDebito) 
            let taxas = Object.values(this.taxaDebito)

            array.forEach((n,i)=>{
                if( n == valorMaq){
                    let v = this.valorVenda.value - (this.
                        valorVenda.value * taxas[i])

                    let real = this._formatarMoeda(v)
                    this.valorDescontado.innerText = real
                }
            })
        }
        else{
            let array = Object.keys(this.taxaCredito)
            let taxas = Object.values(this.taxaCredito)

            array.forEach((n,i)=>{
                if(n == valorMaq){
                    let v = this.valorVenda.value - (this.
                        valorVenda.value * taxas[i])
                    
                    let real = this._formatarMoeda(v)
                    this.valorDescontado.innerText = real
                }
            })
        }
    }
}