import {Simulacao} from './teste.js'

class Valor extends Simulacao{
    constructor(){
        super()
        this.valorVenda = document.querySelector('#valorVenda')
    }
    
    atualizarValor(){
        this.valorVenda.addEventListener('keyup',()=>{
            console.log(this.valorMaq)
            if(this.valorMaq == 'UltraTon' && this.debCred == 'credito'){
                this.valorDescontado.innerText = 'funcionou'
            }
        })
    }

    teste(){
        console.log(this.valorVenda.placeholder)
    }
}

const valor = new Valor()

//valor.atualizarValor()
//valor.teste()