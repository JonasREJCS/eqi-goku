import { CondicaoTrabalho, DeclaraIR, TipoIR } from '../@types/index'
import { Simulacao } from '../classes/simulacao.class'

export class DadosSimulacao {
  simulacaoId?: number
  dadosSimulacaoId?: number
  condicaoTrabalho: CondicaoTrabalho
  declaraIR: DeclaraIR
  tipoIR: TipoIR
  rendaMensal: number
  tempoContribuicao: number
  contribuicaoMensal: number
  valorAporte: number

  constructor ({
    dadosSimulacaoId,
    condicaoTrabalho,
    declaraIR,
    tipoIR,
    rendaMensal,
    tempoContribuicao,
    contribuicaoMensal,
    valorAporte,
    simulacaoId
  }: DadosSimulacao) {
    this.dadosSimulacaoId = dadosSimulacaoId
    this.condicaoTrabalho = condicaoTrabalho
    this.declaraIR = declaraIR
    this.tipoIR = tipoIR
    this.rendaMensal = rendaMensal
    this.tempoContribuicao = tempoContribuicao
    this.contribuicaoMensal = contribuicaoMensal
    this.valorAporte = valorAporte
    this.simulacaoId = simulacaoId
  }
}
