import {Router, Request, Response, NextFunction} from 'express'
class LoginController {

    getLogin((req: Request, res: Response) => {
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
}