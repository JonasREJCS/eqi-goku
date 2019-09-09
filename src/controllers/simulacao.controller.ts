import * as SQL from '../functions/infra/SQL.fn'
import { InsertOkSQL } from '../@types'
import { DadosSimulacao } from '../classes/dados-simulacao.class'

export const gerarSimulacao = async (req: any, res: any) => {
  try {
    const resposta = new DadosSimulacao(req.body)
    const queryInsertResposta = SQL.criarQueryInsert(resposta,'DadosSimulacao')
    const resultInsertionResposta: InsertOkSQL = await SQL.exec(queryInsertResposta)

    if (resultInsertionResposta.affectedRows === 0) {
      throw new Error('A resposta da simulacao não foi salva no banco de dados')
    }

    res.json({ erro: false, resultado: 'A resposta foi salva com sucesso' })

  } catch (e) {
    console.error(e)
    res.json({ erro: true, mensagem: e.message })
  }
}
