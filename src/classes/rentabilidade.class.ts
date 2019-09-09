import { Fundo } from '../classes/fundo.class'

export class Rentabilidade {
  rentabilidadeId: number
  rendimentoTotal: number
  fundo: Fundo

  constructor ({
    rentabilidadeId,
    rendimentoTotal,
    fundo
  }: Rentabilidade){
    this.rentabilidadeId = rentabilidadeId
    this.rendimentoTotal = rendimentoTotal
    this.fundo = fundo
  }
}