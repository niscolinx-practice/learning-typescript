import { AppRouter } from './AppRouter.js';
import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes.js'
import cookieSession from 'cookie-session'
import './controllers/LoginController.js'


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['kajdfadkfd'] }))
app.use(router)
app.use(AppRouter.getInstance())

const PORT = 3000

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
