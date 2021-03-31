import e, { Router, Response, Request, request } from 'express'

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
    res.send(`
        <form method="POST"> 
        <div>
        <label>Email</label>
        <input name="email"/>
        </div>
        <div>
        <label>Passoword</label>
        <input type="password" name="password"/>
        </div>

        <button>Submit</button>
        </form
    `)
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    res.send(email.uppercase())
})
export { router }
