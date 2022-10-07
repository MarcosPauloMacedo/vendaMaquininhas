import {Planos} from './Planos.js'
import {Valores} from "./Valores.js"
import {Simulacao} from './calculadora/simulacao.mjs'

const simulacao = new Simulacao()
const planos = new Planos()
const valores = new Valores()

planos.over()
valores.click()
simulacao.ultra()
simulacao.giga()
simulacao.mega()
simulacao.tonBasico()
simulacao.deb()
simulacao.cred()
simulacao.atualizar()
simulacao.tiposPagamento()

