import express from 'express'

export const controllerRouter = express.Router()

export function controller(routePrefix: string) {
    return function (target: Function) {
    
        for (let key in target.prototype) {
            console.log('prototype', key)
            const routeHandler = target.prototype[key]

            const path = Reflect.getMetadata('path', target.prototype, key)

            console.log({path})

            if(path){
                console.log(`${routePrefix}${path}`)
                controllerRouter.get(`${routePrefix}${path}`, routeHandler)
            }
        }
    }
}
