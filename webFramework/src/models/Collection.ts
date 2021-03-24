import axios, { AxiosResponse } from 'axios'
import { User } from './User'

export class Collection<T, K> {

    constructor(public rootUrl: string) {}

    fetch(): Promise<void> {
     return axios.get(this.rootUrl).then((res: AxiosResponse): void => {
         console.log(res.data)

         User.buildUser(res.data)

     })
    }
}
