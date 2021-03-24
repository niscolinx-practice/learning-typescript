import { Events } from './Events';
import axios, { AxiosResponse } from 'axios'
import { User, UserProps } from './User'

export class Collection<T, K> {
    models: T[] = []
    events: Events = new Events() 

    constructor(private rootUrl: string,
         private deserialize: (json: K) =>  T
         ) {}

    fetch(): Promise<void> {
     return axios.get(this.rootUrl).then((res: AxiosResponse): void => {

         res.data.forEach((eachUser: K) => {
             this.models.push(this.deserialize((eachUser)))
         })

     })
    }

    get on(){
        return this.events.on
    }

    get trigger(){
        return this.events.trigger
    }
}
