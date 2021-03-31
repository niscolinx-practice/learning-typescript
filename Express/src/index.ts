import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import {router} from './routes/loginRoutes.js'
import cookieSession from 'cookie-session'

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({keys: ['kajdfadkfd']}))
app.use(router)

const PORT = 3000

app.listen(PORT, () => { 
    console.log('listening on port', PORT)
})
