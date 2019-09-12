import { RequestHandler } from 'express-serve-static-core'
import { fundoSchema } from '../../joi-schemas/fundo.schema'

export const validarFundo: RequestHandler = (req, res, next) => {
  try {
    const isValid = fundoSchema.validate(req.body)
    if (isValid.error) throw new Error('Fundo - ' + isValid.error.message)
    next()
  } catch (e) {
    res.json({ erro: true, mensagem: e.message })
  }
}
