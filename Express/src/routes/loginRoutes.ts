import { Router } from 'express'

const route = Router()

route.get('/login', (req, res) => {
    res.send('Login ')
})

export { route }
