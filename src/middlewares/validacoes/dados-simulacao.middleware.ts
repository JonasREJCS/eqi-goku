import { RequestHandler } from 'express-serve-static-core'
import { dadosSimulacaoSchema } from '../../joi-schemas/dados-simulacao.schema'

export const validarDadosSimulacao: RequestHandler = (req, res, next) => {
  try {
    const isValid = dadosSimulacaoSchema.validate(req.body)
    if (isValid.error) throw new Error('Dados Simulacao - ' + isValid.error.message)
    next()
  } catch (e) {
    res.json({ erro: true, mensagem: e.message })
  }
}
