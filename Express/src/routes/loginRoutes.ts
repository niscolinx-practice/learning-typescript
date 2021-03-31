import { Router, Response, Request } from 'express'

interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined
    }
}

function requireAuth(req, res, next)  {

}

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send(
        `<div>
        <h1>Hi there!</h1>  
        <a href='/login'>Login</a>
        </div>
        `
    )
})

router.get('/auth', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(
            `<div>
        <h1>You logged in successfully!!</h1> 
        <a href='/logout'>Logout</a> 
        </div>
        `
        )
    } else {
        res.send(
            `<div>
        <h1>You are not logged in</h1>  
        <a href='/login'>Login</a>
        </div>
        `
        )
    }
})

router.get('/login', (req, res) => {
    res.send(`
        <form method="POST" style="text-align: center; font-size: 1rem; margin: 5rem auto; padding: 1rem"> 
        <div>
        <label>Email</label>
        <input name="email" style="font-size: 1rem; margin: 1rem"/>
        </div>
        <div>
        <label>Password</label>
        <input type="password" name="password" style="font-size: 1rem; margin: 1rem"/>
        </div>

        <button style="font-size: 1rem; padding: 1rem">Submit</button>
        </form
    `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body

    if (email && password && email === 'test@test.com' && password === 'test') {
        req.session = { loggedIn: true }
        res.redirect('/auth')
    } else {
        res.send(`Invalid email or password`)
    }
})

router.get('/logout', (req, res) => {

    req.session = undefined
    res.redirect('/')
})
export { router }
