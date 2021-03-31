import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send(
        `<div>
        <h1>Hi there!</h1>  
        </div>
        `
    )
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
