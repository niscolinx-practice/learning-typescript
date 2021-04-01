import { MetadataKeys } from './MetadataKeys.js';
import { Methods } from './Methods.js';
import { AppRouter } from './../../AppRouter.js';

export function controller(routePrefix: string) {
    return function (target: Function) {
        
        const controllerRouter = AppRouter.getInstance()

        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]

            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key)

            if(path){
                controllerRouter[method](`${routePrefix}${path}`, routeHandler)
            }
        }
    }
}
