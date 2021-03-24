import { Events } from './Events';
import axios, { AxiosResponse } from 'axios'
import { User, UserProps } from './User'

export class Collection<T, K> {
    models: User[] = []
    events: Events = new Events() 

    constructor(public rootUrl: string) {}

    fetch(): Promise<void> {
     return axios.get(this.rootUrl).then((res: AxiosResponse): void => {

         res.data.forEach((eachUser: UserProps) => {
             this.models.push(User.buildUser(eachUser))
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
