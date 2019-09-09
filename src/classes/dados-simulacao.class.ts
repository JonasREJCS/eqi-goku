import { CondicaoTrabalho, DeclaraIR, TipoIR } from '../@types/index'
import { Simulacao } from '../classes/simulacao.class'

export class DadosSimulacao {
  simulacao?: Simulacao
  dadosSimulacaoId?: number
  condicaoTrabalho: CondicaoTrabalho
  declaraIR: DeclaraIR
  tipoIR: TipoIR
  rendaMensal: number
  tempoContribuicao: number
  contribuicaoMensal: number
  valorAporte: number

  constructor ({
    simulacao,
    dadosSimulacaoId,
    condicaoTrabalho,
    declaraIR,
    tipoIR,
    rendaMensal,
    tempoContribuicao,
    contribuicaoMensal,
    valorAporte
  }: DadosSimulacao) {
    this.simulacao = simulacao
    this.dadosSimulacaoId = dadosSimulacaoId
    this.condicaoTrabalho = condicaoTrabalho
    this.declaraIR = declaraIR
    this.tipoIR = tipoIR
    this.rendaMensal = rendaMensal
    this.tempoContribuicao = tempoContribuicao
    this.contribuicaoMensal = contribuicaoMensal
    this.valorAporte = valorAporte
  }
}
