import Joi from '@hapi/joi'

export const resultadoSchema = Joi.object().keys({
  resultadoId: Joi.number().positive().min(1).required(),
  planoPrevidencia: Joi.string().min(1).max(4).required(),
  regimeTributarioIR: Joi.string().min(1).max(11).required()
}).required()
