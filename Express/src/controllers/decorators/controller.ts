import { RequestHandler, NextFunction } from 'express';
import { MetadataKeys } from './MetadataKeys.js';
import { Methods } from './Methods.js';
import { AppRouter } from './../../AppRouter.js';

function validateBody(keys: string): RequestHandler {
    return function(req: Request, res: Response, next: NextFunction){
        
    }
}


export function controller(routePrefix: string) {
    return function (target: Function) {
        
        const controllerRouter = AppRouter.getInstance()

        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]

            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)

            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key)

            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || []

            if(path){
                controllerRouter[method](`${routePrefix}${path}`,...middlewares, routeHandler)
            }
        }
    }
}
