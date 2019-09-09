import mysql, { PoolConfig } from 'mysql'
import { Table } from '../../@types'

const escape = mysql.escape

const config: PoolConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_SENHA,
  database: process.env.DB_NAME,
  multipleStatements: true
}

const connection = mysql.createPool(config)

const exec = (query: string): Promise<any> =>
  new Promise((resolve, reject) => {
    connection.query(query, (err, result) =>
      err ? reject(err) : resolve(result)
    )
  })

const criarQueryInsert = (dados: {}, table: Table): string => {
  const insertInto = 'INSERT INTO ' + table + ' ('
  let fields = ''
  const insertValues = ') VALUES ('
  let values = ''

  for (const [key, value] of Object.entries(dados)) {
    if (value != null) {
      fields += key + ', '
      values += mysql.escape(value) + ', '
    }
  }

  return `${insertInto}
    ${fields.substring(0, fields.length - 2)}
    ${insertValues + values.substring(0, values.length - 2)}
    )`
}

export { exec, criarQueryInsert, escape }
