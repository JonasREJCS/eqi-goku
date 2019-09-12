import { RequestHandler } from 'express-serve-static-core'
import { resultadoSchema } from '../../joi-schemas/resultado.schema'

export const validarResultado: RequestHandler = (req, res, next) => {
  try {
    const isValid = resultadoSchema.validate(req.body)
    if (isValid.error) throw new Error('Resultado - ' + isValid.error.message)
    next()
  } catch (e) {
    res.json({ erro: true, mensagem: e.message })
  }
}
