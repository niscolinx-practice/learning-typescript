import express, { Request, Response } from 'express'
import {router} from './routes/loginRoutes'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send(
        `<div>
        <h1>Hi there!</h1>  
        </div>
        `
    )
})

app.use(router)

const PORT = 3000

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
