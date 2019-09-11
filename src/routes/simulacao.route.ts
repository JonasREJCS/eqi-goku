import express from 'express'

const simulacaoRouter = express.Router()

import { salvarDadosSimulacao } from '../controllers/simulacao.controller'
import { validarDadosSimulacao } from '../middlewares/validacoes/dados-simulacao.middleware'

simulacaoRouter.post('/v1/salvar-simulacao', validarDadosSimulacao, salvarDadosSimulacao)

export default simulacaoRouter
