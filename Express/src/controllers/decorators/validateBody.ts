import { MetadataKeys } from './MetadataKeys.js';
export function validateBody(...keys: string[]) {
    return function(target: any, key: string, desc: PropertyDescriptor){
        Reflect.defineMetadata(MetadataKeys.validator, key, target, key)
    }
}
