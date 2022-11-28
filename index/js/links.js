let clicar = (botao,link)=>{
    botao.forEach((bot)=>{
        bot.style.cursor = 'pointer'
        bot.onclick = ()=>{
            open(link)
        }
    })
}

let pegar = document.querySelectorAll.bind(document)

let botmp = pegar('.botao-comprar')
let linkmp = 'https://mpago.li/1UKPQKj'

clicar(botmp,linkmp)

let botpagSeg = pegar('.peca-ja')
let linkpagSeg = 'http://pagseguro.info/bdcpzNwd'

clicar(botpagSeg,linkpagSeg)

let botTon = pegar('.pedir-ton')
let linkTon = 'https://www.ton.com.br/catalogo/?referrer=7F7282DF-B1F8-471B-A91C-F0821B18250A&utm_medium=invite_share&utm_source=revendedor'

clicar(botTon,linkTon)

let samup = pegar('.sumup-comprar')
let linkSamup = 'http://r.sumup.com/referrals/uet6k?share_id=8cyz6H0'

clicar(samup,linkSamup)




