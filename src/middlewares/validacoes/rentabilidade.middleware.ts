import { RequestHandler } from 'express-serve-static-core'
import { rentabilidadeSchema } from '../../joi-schemas/rentabilidade.schema'

export const validarRentabilidade: RequestHandler = (req, res, next) => {
  try {
    const isValid = rentabilidadeSchema.validate(req.body)
    if (isValid.error) throw new Error('Rentabilidade - ' + isValid.error.message)
    next()
  } catch (e) {
    res.json({ erro: true, mensagem: e.message })
  }
}
