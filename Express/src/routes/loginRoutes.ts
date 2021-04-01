import { Router, Response, Request, NextFunction } from 'express'

interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined
    }
}

function requireAuth(req: Request, res: Response, next: NextFunction ): void  {

    if(req.session && req.session.loggedIn){
        return next()
    }

    res.status(403);
    res.send(`Not permitted`)
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

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send(`Welcome to protected route`)
})
export { router }
