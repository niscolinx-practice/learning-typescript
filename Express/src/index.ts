import express, { Request, Response } from 'express'
import {router} from './routes/loginRoutes'

const app = express()

app.use(router)

const PORT = 3000

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
