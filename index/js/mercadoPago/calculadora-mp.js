class Simulacao{
    constructor(){
        let $ = document.querySelector.bind(document)
        this.valor = $('#mp-valor') //digitar valor da venda
        this.venda = $('#mp-valorVenda') //Se vender R$ 150, você recebe:
        this.debito = $('#mp-precoDebito')
        this.credito = $('#mp-precoCredito')
        this.precoParcelado = $('#mp-precoParcelado')
        this.pix = $('#mp-precoPix')
        this.mpSelect = $('#mp-select')
        this.mpParcelas = $('#mp-x-parcelas')
    }

    simular(){
        let valor = this.valor
        valor.addEventListener('keyup',()=>{
            if(valor.value == 0){
                return this.venda.innerText = 'Se vender R$ 150, você recebe:',
                this.debito.textContent = 'R$ 147.01',
                this.credito.textContent = 'R$ 142.89',
                this.precoParcelado.textContent = 'R$ 142.03',
                this.pix.textContent = 'R$ 150.00'
            }

            else{
                this.venda.
                innerText = `Se vender R$ ${valor.value},00, você recebe:`

                let taxas = []

                let tarifas = [0.0199,0.0474,0.0531,0]
                tarifas.forEach((n,i)=>{ 
                    taxas.push((valor.value - (valor.value * tarifas[i])).toFixed(2))
                })

                this.debito
                .textContent = `R$ ${taxas[0]}` 
                
                this.credito
                .textContent = `R$ ${taxas[1]}`
        
                this.precoParcelado
                .textContent = `R$ ${taxas[2]}`

                this.pix
                .textContent = `R$ ${taxas[3]}`
            }
        })
    }

    mostrar(){
        this.mpParcelas.addEventListener('change',(event)=>{
            let taxas = [0.0479,0.0597,0.0733]
            let tarifas = []

            if(this.valor.value == 0){
                return this.venda.innerText = 'Se vender R$ 150, você recebe:',
                this.debito.textContent = 'R$ 147.01',
                this.credito.textContent = 'R$ 142.89',
                this.precoParcelado.textContent = 'R$ 142.03',
                this.pix.textContent = 'R$ 150.00'
            }

            taxas.forEach((n,i)=>{
                tarifas.push(this.valor.value - (this.valor.value * taxas[i]))
            })
           
            if(event.target.value == '2x'){
             this.precoParcelado.textContent = `R$ ${tarifas[0]}`
            } 

            else if( event.target.value == '3x'){
             this.precoParcelado.textContent = `R$ ${tarifas[1]}`
            }

            else{
             this.precoParcelado.textContent = `R$ ${tarifas[2]}`
            }
         })
    }
}

const simulacao = new Simulacao
simulacao.simular()
simulacao.mostrar()
