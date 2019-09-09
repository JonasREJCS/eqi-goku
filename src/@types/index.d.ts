export type DeclaraIR = 'NAO DECLARA IR' | 'DECLARA IR'
export type TipoIR = 'SIMPLES' | 'COMPLETO' | 'NAO SABE'
export type CondicaoTrabalho = 'CLT' | 'SERVIDOR PUBLICO' | 'OUTRO'
export type PlanoPrevidencia = 'VGBL' | 'PGBL'
export type RegimeTributarioIR = 'PROGRESSIVO' | 'REGRESSIVO'
export type Table = 'DadosSimulacao' | 'Fundo' | 'Rentabilidade' | 'Resultado' | 'Simulacao'

export interface InsertOkSQL {
  affectedRows: number
  changedRows: number
  fieldCount: number
  insertId: number
  message: string
  protocol41: boolean
  serverStatus: number
  warningCount: number
}