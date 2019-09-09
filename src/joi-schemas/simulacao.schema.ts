import Joi from '@hapi/joi'

export const simulacaoSchema = Joi.object().keys({
  simulacaoId: Joi.number().positive(),
  data: Joi.date().max('now').required()
})
