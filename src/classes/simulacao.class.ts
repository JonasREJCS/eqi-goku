import { DadosSimulacao } from './dados-simulacao.class'

export class Simulacao {
  simulacaoId?: number
  data: Date
  dadosSimulacao?: DadosSimulacao

  constructor ({
          simulacaoId,
          data
      }: Simulacao) {
    this.simulacaoId = simulacaoId
    this.data = data
  }
}
