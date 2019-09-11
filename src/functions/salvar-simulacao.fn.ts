import { InsertOkSQL } from '../@types'
import * as SQL from '../functions/infra/SQL.fn'
import { Simulacao } from '../classes/simulacao.class'
import { DadosSimulacao } from '../classes/dados-simulacao.class'

export const salvarSimulacao = (simulacao: Simulacao): Promise<InsertOkSQL> => {
  const queryInsertSimulacao = SQL.criarQueryInsert(simulacao,'Simulacao')
  return SQL.exec(queryInsertSimulacao)
}

export const salvarDadosSimulacao = (dadosSimulacao: DadosSimulacao, simulacaoId: number): Promise<InsertOkSQL> => {
  dadosSimulacao.simulacaoId = simulacaoId
  const queryInsertDadosSimulacao = SQL.criarQueryInsert(dadosSimulacao,'DadosSimulacao')
  console.log(queryInsertDadosSimulacao)
  return SQL.exec(queryInsertDadosSimulacao)
}
