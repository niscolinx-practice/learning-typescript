import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import {router} from './routes/loginRoutes.js'

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

const PORT = 3000

app.listen(PORT, () => { 
    console.log('listening on port', PORT)
})
