import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys.js';

export function use(middleware: RequestHandler){

    return function(target: any, key: string, desc: PropertyDescriptor){
        const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || []

        middlewares.push(middleware)

        Reflect.defineMetadata(MetadataKeys.middleware, middlewares, target, key)
    }
}