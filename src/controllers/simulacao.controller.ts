
import { RequestHandler } from 'express'
import { salvarDadosSimulacao, salvarSimulacao } from '../functions/salvar-simulacao.fn'
import { Simulacao } from '../classes/simulacao.class'
import { DadosSimulacao } from '../classes/dados-simulacao.class'
import { startTransaction, commitTransaction, rollbackTransaction } from '../functions/infra/SQL.fn'

/**
 * Armazena na base de dados um objeto do tipo DadosSimulacao recebido do front
 * @param req Requisicao
 * @param res Resposta
 */
export const salvar: RequestHandler = async (req, res) => {
  try {
    const msgErro = {
      erro1: `A Simulacao não foi salva no banco de dados devido a um erro.`,
      erro2: `Os Dados da Simulacao não foram salvos no banco de dados devido a um erro.`
    }

    // { ...blablabla} significa copia rasa para garantir a imutabilidade dos dados
    const simulacaoDoFront = { ...req.body.simulacao }
    const dadosSimulacaoDoFront = { ...req.body.simulacao.dadosSimulacao }

    const simulacao = new Simulacao(simulacaoDoFront)
    const dadosSimulacao = new DadosSimulacao(dadosSimulacaoDoFront)
    await startTransaction()
    const resultadoSimulacao = await salvarSimulacao(simulacao)

    if (resultadoSimulacao.affectedRows === 0) throw new Error(msgErro.erro1)

    const resultadoDadosSimulacao = await salvarDadosSimulacao(new DadosSimulacao(req.body), resultadoSimulacao.insertId)

    if (resultadoDadosSimulacao.affectedRows === 0) throw new Error(msgErro.erro2)
    await commitTransaction()
    res.json({ erro: false, resultado: 'A resposta foi salva com sucesso' })

  } catch (e) {
    await rollbackTransaction()
    res.json({ erro: true, mensagem: e.message })
  }
}
