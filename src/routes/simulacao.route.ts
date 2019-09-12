import express from 'express'

const simulacaoRouter = express.Router()

import { salvar } from '../controllers/simulacao.controller'
import { validarSimulacao } from '../middlewares/validacoes/simulacao.middleware'
import { validarDadosSimulacao } from '../middlewares/validacoes/dados-simulacao.middleware'

simulacaoRouter.post('/v1/salvar-simulacao', validarSimulacao, validarDadosSimulacao, salvar)

export default simulacaoRouter
