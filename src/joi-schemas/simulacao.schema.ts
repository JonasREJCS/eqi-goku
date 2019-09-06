import Joi from '@hapi/joi'

export const simulacaoSchema = Joi.object().keys({
  simulacaoId: Joi.number().min(1),
  data: Joi.date().max('now')
})
