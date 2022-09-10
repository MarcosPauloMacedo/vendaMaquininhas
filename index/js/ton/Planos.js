export class Planos{
    constructor(){
        let pegar = document.querySelector.bind(document)

        this.ultraTon = pegar('#ultraTon')
        this.gigaTon = pegar('#gigaTon')
        this.megaTon = pegar('#megaTon')
        this.basico = pegar('#basico')

        this.nomes = [pegar('.t1-nome'),pegar('.t1Chip'),
        pegar('.t2'),pegar('.t3')]

        this.precos = [pegar('.preco-t1'),pegar('.t1-Chip-Preco'),
        pegar('.t2-preco'),pegar('.preco-t3')]

        this.parcelas = [pegar('.parcela-t1'),pegar('.t1-Chip-Parcela'),
        pegar('.t2-parcela'),pegar('.parcela-t3')]
    }

    _overUltra(){
        let ultra = this.ultraTon
        ultra
        .addEventListener('mouseover',()=>{
            ultra.style.border = '2px solid black'
        })

        ultra
        .addEventListener('mouseout',()=>{
            ultra.style.border = '2px solid #02f518'
        })
    }

    _overGiga(){
        let giga = this.gigaTon
        giga
        .addEventListener('mouseover',()=>{
            giga.style.border = '2px solid black'
        })

        giga
        .addEventListener('mouseout',()=>{
            giga.style.border = '2px solid #02f518'
        })
    }

    _overMega(){
        let mega = this.megaTon
        mega
        .addEventListener('mouseover',()=>{
            mega.style.border = '2px solid black'
        })

        mega
        .addEventListener('mouseout',()=>{
            mega.style.border = '2px solid #02f518'
        })
    }

    _overBasico(){
        let basico = this.basico
        basico
        .addEventListener('mouseover',()=>{
            basico.style.border = '2px solid black'
        })

        basico
        .addEventListener('mouseout',()=>{
            basico.style.border = '2px solid #02f518'
        })
    }

    over(){
        return this._overUltra(), this._overGiga(),
        this._overMega(),this._overBasico()
    }
}
