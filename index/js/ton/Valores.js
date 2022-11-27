import { Planos } from "./Planos.js";
export class Valores extends Planos{
    constructor(){
        super()
    }

    _ultraClick(){
        let ultra = this.ultraTon
        let nomes = this.nomes
        let precos = this.precos
        let parcelas = this.parcelas

        let dadosUltra = []
        dadosUltra[0] = ['T1 ULTRA','T1 CHIP ULTRA','T2+ ULTRA','T3 ULTRA']
        dadosUltra[1] = ['9,90','15,90','25,90','34,90']
        dadosUltra[2] = ['R$ 118,80','R$ 190,80','R$ 310,80','R$ 418,80']

        let lista = [this.gigaTon,this.megaTon,this.basico]

        ultra.addEventListener('click',()=>{
            lista.forEach((n,i)=>{
                lista[i].style.background = '#ffffff'
            })

            ultra.style.background = '#FFEF5B'

            nomes.forEach((n,i)=>{
                nomes[i].innerText = dadosUltra[0][i]
            })

            parcelas.forEach((n,i)=>{
                parcelas[i].innerText = dadosUltra[1][i]
            })

            precos.forEach((n,i)=>{
                precos[i].innerText = dadosUltra[2][i]
            })
        })
    }

    _gigaClick(){
        let giga = this.gigaTon
        let nomes = this.nomes
        let precos = this.precos
        let parcelas = this.parcelas

        let dadosGiga = []
        dadosGiga[0] = ['T1 GIGA','T1 CHIP GIGA','T2+ GIGA','T3 GIGA']
        dadosGiga[1] = ['7,90','10,90','19,90','29,90']
        dadosGiga[2] = ['R$ 94,80','R$ 130,80','R$ 238,80','R$ 358,80']

        let lista = [this.ultraTon,this.megaTon,this.basico]

        giga.addEventListener('click',()=>{
            lista.forEach((n,i)=>{
                lista[i].style.background = '#ffffff'
            })

            giga.style.background = '#FFEF5B'

            nomes.forEach((n,i)=>{
                nomes[i].innerText = dadosGiga[0][i]
            })

            parcelas.forEach((n,i)=>{
                parcelas[i].innerText = dadosGiga[1][i]
            })

            precos.forEach((n,i)=>{
                precos[i].innerText = dadosGiga[2][i]
            })

        })
    }

    _megaClick(){
        let mega = this.megaTon
        let nomes = this.nomes
        let precos = this.precos
        let parcelas = this.parcelas

        let dadosMega = []
        dadosMega[0] = ['T1 MEGA','T1 CHIP MEGA','T2+ MEGA','T3 MEGA']
        dadosMega[1] = ['4,90','8,90','15,90','26,90']
        dadosMega[2] = ['R$ 58,80','R$ 106,80','R$ 190,80','R$ 322,80']

        let lista = [this.ultraTon,this.gigaTon,this.basico]

        mega.addEventListener('click',()=>{
            lista.forEach((n,i)=>{
                lista[i].style.background = '#ffffff'
            })

            mega.style.background = '#FFEF5B'

            nomes.forEach((n,i)=>{
                nomes[i].innerText = dadosMega[0][i]
            })

            parcelas.forEach((n,i)=>{
                parcelas[i].innerText = dadosMega[1][i]
            })

            precos.forEach((n,i)=>{
                precos[i].innerText = dadosMega[2][i]
            })
        })
    }

    _basicoClick(){
        let basico = this.basico
        let nomes = this.nomes
        let precos = this.precos
        let parcelas = this.parcelas

        let dadosBasico = []
        dadosBasico[0] = ['T1 BASICO','T1 CHIP BASICO','T2+ BASICO','T3 BASICO']
        dadosBasico[1] = ['2,90','7,90','13,90','19,90']
        dadosBasico[2] = ['R$ 34,80','R$ 94,80','R$ 166,80','R$ 238,80']

        let lista = [this.ultraTon,this.gigaTon,this.megaTon]

        basico.addEventListener('click',()=>{
            lista.forEach((n,i)=>{
                lista[i].style.background = '#ffffff'
            })

            basico.style.background = '#FFEF5B'

            nomes.forEach((n,i)=>{
                nomes[i].innerText = dadosBasico[0][i]
            })

            parcelas.forEach((n,i)=>{
                parcelas[i].innerText = dadosBasico[1][i]
            })

            precos.forEach((n,i)=>{
                precos[i].innerText = dadosBasico[2][i]
            })
        })
    }

    click(){
        return this._ultraClick(), this._gigaClick(),
        this._megaClick(),this._basicoClick()
    }
}
