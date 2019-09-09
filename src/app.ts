require('dotenv').config()

import express from 'express'
import simulacaoRouter from './routes/simulacao.route'
import bodyParser from 'body-parser'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Credentials', 1)
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 7373

if(process.env.NODE_ENV === 'DEVELOPMENT'){
  app.listen(PORT, () => {
    console.log('listening on ' + PORT)
  })
}

app.use('/', simulacaoRouter)