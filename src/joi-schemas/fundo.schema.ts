import Joi from '@hapi/joi'

export const fundoSchema = Joi.object().keys({
  fundoId: Joi.number().min(1).required(),
  tipoPlano: Joi.string().min(1).max(29).required(),
  SUSEP: Joi.string().min(1).max(21).required(),
  nomeSeguradora: Joi.string().min(1).max(120).required(),
  cnpjSeguradora: Joi.string().min(1).max(19).required(),
  nomeFundo: Joi.string().min(1).max(110).required(),
  cnpjFundo: Joi.string().min(1).max(19).required()
}).required()
