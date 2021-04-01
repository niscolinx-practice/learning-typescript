import { AppRouter } from './../../AppRouter.js';

export function controller(routePrefix: string) {
    return function (target: Function) {
        
        const controllerRouter = AppRouter.getInstance()

        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]

            const path = Reflect.getMetadata('path', target.prototype, key)
            const method = Reflect.getMetadata('method', target.prototype, key)

            if(path){
                controllerRouter[method](`${routePrefix}${path}`, routeHandler)
            }
        }
    }
}
