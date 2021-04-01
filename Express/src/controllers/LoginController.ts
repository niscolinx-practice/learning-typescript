import { Router, Request, Response, NextFunction } from 'express'
import { controller } from './decorators/controller.js'
import { get, post } from './decorators/routes.js'
import { validateBody } from './decorators/validateBody.js'



@controller('/auth')
export class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
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
    }

    @post('/login')
    @validateBody('email', 'password')
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body

        if (
            email &&
            password &&
            email === 'test@test.com' &&
            password === 'test'
        ) {
            req.session = { loggedIn: true }
            res.redirect('/auth')
        } else {
            res.send(`Invalid email or password`)
        }
    }
}
