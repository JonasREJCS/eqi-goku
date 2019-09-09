import express from 'express'

const simulacaoRouter = express.Router()

import { gerarSimulacao } from '../controllers/simulacao.controller'

simulacaoRouter.post('/v1/gerar-simulacao', gerarSimulacao)

export default simulacaoRouter
