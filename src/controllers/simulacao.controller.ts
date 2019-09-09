import * as SQL from '../functions/infra/SQL.fn'
import { InsertOkSQL } from '../@types'
import { DadosSimulacao } from '../classes/dados-simulacao.class'

/**
 * Armazena na base de dados um objeto do tipo DadosSimulacao recebido do front
 * @param req Requisicao
 * @param res Resposta
 */
export const salvarDadosSimulacao = async (req: any, res: any) => {
  try {
    const resposta = new DadosSimulacao(req.body)
    const queryInsertResposta = SQL.criarQueryInsert(resposta,'DadosSimulacao')
    const resultInsertionResposta: InsertOkSQL = await SQL.exec(queryInsertResposta)

    if (resultInsertionResposta.affectedRows === 0) {
      throw new Error(`Os dados não foram salvos no banco de dados devido a um erro.`)
    }

    res.json({ erro: false, resultado: 'A resposta foi salva com sucesso' })

  } catch (e) {
    res.json({ erro: true, mensagem: e.message })
  }
}
