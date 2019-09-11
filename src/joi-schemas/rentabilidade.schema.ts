import Joi from '@hapi/joi'

export const rentabilidadeSchema = Joi.object().keys({
  rentabilidadeId: Joi.number().positive().min(1).required(),
  rendimentoTotal: Joi.number().positive().min(1).max(14).required()
}).required()
