import express from 'express'

export const controllerRouter = express.Router()

export function controller(routePrefix: string) {
    return function (target: Function) {
        console.log('hello there')
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]

            const path = Reflect.getMetadata('path', target.prototype, key)

            if(path){
                console.log(`${routePrefix}${path}`)
                controllerRouter.get(`${routePrefix}${path}`, routeHandler)
            }
        }
    }
}
