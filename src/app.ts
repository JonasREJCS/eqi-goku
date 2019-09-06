import { Simulacao } from './classes/simulacao.class'
import { simulacaoSchema } from './joi-schemas/simulacao.schema'

let simulacao = new Simulacao({
  data: new Date(2120,9,6,18,0,0)
})
if (simulacaoSchema.validate(simulacao)) {
  console.log('valido')
} else {
  console.log('invalido')
}
