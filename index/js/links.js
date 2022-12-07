let clicar = (botao,link)=>{
    botao.forEach((bot)=>{
        bot.style.cursor = 'pointer'
        bot.onclick = ()=>{
            open(link)
        }
    })
}

let mpClicar = (botao)=>{
    botao.forEach((bot)=>{
        bot.style.cursor = 'pointer'
        bot.onclick = ()=>{

            switch(bot.value){
                case 'mini-point' : open('http://mpago.li/1f26vJ8')
                break

                case 'point-pro2' : open('http://mpago.li/2A6sjV4')
                break

                case 'point-smart' : open('http://mpago.li/1aPkZzS')
                break
                
                case 'mini-chip' : open('http://mpago.li/274pL6k')
                break
            }
        }
    })
}

let pegar = document.querySelectorAll.bind(document)

let botmp = pegar('.botao-comprar')

mpClicar(botmp)

let botpagSeg = pegar('.peca-ja')
let linkpagSeg = 'http://pagseguro.info/bdcpzNwd'

clicar(botpagSeg,linkpagSeg)

let botTon = pegar('.pedir-ton')
let linkTon = 'https://www.ton.com.br/catalogo/?referrer=7F7282DF-B1F8-471B-A91C-F0821B18250A&utm_medium=invite_share&utm_source=revendedor'

clicar(botTon,linkTon)

let samup = pegar('.sumup-comprar')
let linkSamup = 'http://r.sumup.com/referrals/uet6k?share_id=8cyz6H0'

clicar(samup,linkSamup)




