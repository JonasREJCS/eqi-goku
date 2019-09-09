import express from 'express'

const simulacaoRouter = express.Router()

import { salvarDadosSimulacao } from '../controllers/simulacao.controller'

simulacaoRouter.post('/v1/gerar-simulacao', salvarDadosSimulacao)

export default simulacaoRouter
