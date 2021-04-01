import 'reflect-metadata'

function routeBinder(method: string){

    return function(path: string) {
        return function(target: any, key: string, desc: PropertyDescriptor){
    
        Reflect.defineMetadata('path',path, target, key )
        Reflect.defineMetadata('path',path, target, key )
        }
        
    }

}

export const get = routeBinder('get')
export const put = routeBinder('put')
export const post = routeBinder('post')
export const del = routeBinder('delete')
export const patch = routeBinder('patch')

