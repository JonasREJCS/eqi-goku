import Joi from '@hapi/joi'
import { dadosSimulacaoSchema } from './dados-simulacao.schema';

export const simulacaoSchema = Joi.object().keys({
  simulacaoId: Joi.number().positive(),
  data: Joi.date().required(),
  dadosSimulacao: dadosSimulacaoSchema
}).required()
