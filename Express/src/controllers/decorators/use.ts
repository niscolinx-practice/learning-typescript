import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys.js';

export function use(middleware: RequestHandler){

    return function(target: any, key: string, desc: PropertyDescriptor){

    }
}