import { criarQueryInsert } from '../../functions/infra/SQL.fn'
import { Table } from '../../@types/index'
import { Simulacao } from '../../classes/simulacao.class'
import { DadosSimulacao } from '../../classes/dados-simulacao.class'
import { Fundo } from '../../classes/fundo.class'
import { Resultado } from '../../classes/resultado.class'

test('testa o criador de insert simulacao', () => {
  expect(criarQueryInsert(new Simulacao({ data: new Date(2019,9,9,0,0,0) }), 'Simulacao')).toBe(`INSERT INTO Simulacao (
    data
    ) VALUES ('2019-10-09 00:00:00.000'
    )`)
})

test('testa o criador de insert dados da simulacao', () => {
  expect(criarQueryInsert(new DadosSimulacao(
    { condicaoTrabalho: 'CLT',
      declaraIR: 'DECLARA IR',
      rendaMensal: 998,
      tipoIR: 'NAO SABE',
      tempoContribuicao: 5,
      contribuicaoMensal: 200,
      valorAporte: 0,
      simulacao: new Simulacao(
        { simulacaoId: 1,
          data: new Date(2019,9,9,0,0,0)
        }) }), 'DadosSimulacao')
        ).toBe('INSERT INTO DadosSimulacao (\n    simulacao, condicaoTrabalho, declaraIR, tipoIR, rendaMensal, tempoContribuicao, contribuicaoMensal, valorAporte\n    ) VALUES (\`simulacaoId`\ = 1, \`data`\ = \'2019-10-09 00:00:00.000\', \'CLT\', \'DECLARA IR\', \'NAO SABE\', 998, 5, 200, 0\n    )')
})
