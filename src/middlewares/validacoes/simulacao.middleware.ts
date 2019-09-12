import { RequestHandler } from 'express-serve-static-core'
import { simulacaoSchema } from '../../joi-schemas/simulacao.schema'

export const validarSimulacao: RequestHandler = (req, res, next) => {
  try {
    const isValid = simulacaoSchema.validate(req.body)
    if (isValid.error) throw new Error('Simulacao - ' + isValid.error.message)
    next()
  } catch (e) {
    res.json({ erro: true, mensagem: e.message })
  }
}
