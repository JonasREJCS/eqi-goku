export class Simulacao {
    simulacaoId: number
    data: Date
  
    constructor ({
          simulacaoId,
          data
      }: Simulacao) {
      this.simulacaoId = simulacaoId
      this.data = data
    }
  }
  