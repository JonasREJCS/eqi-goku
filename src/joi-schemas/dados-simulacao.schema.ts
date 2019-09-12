import Joi from '@hapi/joi'
import { simulacaoSchema } from './simulacao.schema'

const rendaMinima: number = 998
const tempoContribuicaoMinimo: number = 5
const contribuicaoMensalMinima: number = 100

export const dadosSimulacaoSchema = Joi.object().keys({
  dadosSimulacaoId: Joi.number().positive(),
  condicaoTrabalho: Joi.string().only('CLT' , 'SERVIDOR PUBLICO', 'OUTRO').required(),
  declaraIR: Joi.string().only('NAO DECLARA IR' , 'DECLARA IR').required(),
  tipoIR: Joi.string().only('SIMPLES' , 'COMPLETO' , 'NAO SABE').optional(),
  rendaMensal: Joi.number().positive().min(rendaMinima).required(),
  tempoContribuicao: Joi.number().positive().integer().min(tempoContribuicaoMinimo).required(),
  contribuicaoMensal: Joi.number().positive().min(contribuicaoMensalMinima).required(),
  valorAporte: Joi.number().min(0).optional()
}).required()
