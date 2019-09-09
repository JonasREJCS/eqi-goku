require('dotenv').config()

import express from 'express'
import logger from 'morgan'

const app = express()

app.use(logger('dev'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Credentials', 1)
  next()
})

const PORT = process.env.PORT || 7373

if(process.env.NODE_ENV === 'DEVELOPMENT'){
  app.listen(PORT, () => {
    console.log('listening on ' + PORT)
  })
}