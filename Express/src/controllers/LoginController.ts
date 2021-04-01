import { Router, Request, Response, NextFunction } from 'express'
import { controller } from './decorators/controller'
import { get } from './decorators/routes'

@controller('/auth')
class LoginController {
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
}
