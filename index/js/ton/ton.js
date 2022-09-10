import {Planos} from './Planos.js'
import {Valores} from "./Valores.js"
import {Simulacao} from './Simulacao.js'

const simulacao = new Simulacao()
const planos = new Planos()
const valores = new Valores()

planos.over()
valores.click()
simulacao.pegarBotoes()

