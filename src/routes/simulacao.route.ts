import express from 'express'

const simulacaoRouter = express.Router()

import { salvar } from '../controllers/simulacao.controller'

simulacaoRouter.post('/v1/gerar-simulacao', salvar)

export default simulacaoRouter
