export class Resultado {
  resultadoId: number
  planoPrevidencia: string
  regimeTributarioIR: string

  constructor ({
    resultadoId,
    planoPrevidencia,
    regimeTributarioIR
  }: Resultado) {
    this.resultadoId = resultadoId
    this.planoPrevidencia = planoPrevidencia
    this.regimeTributarioIR = regimeTributarioIR
  }
}
