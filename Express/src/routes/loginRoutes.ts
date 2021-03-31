import { Router, Response, Request } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send(
        `<div>
        <h1>Hi there!</h1>  
        </div>
        `
    )
})

router.get('/login', (req, res) => {
    res.send('Login ')
})

export { router }
