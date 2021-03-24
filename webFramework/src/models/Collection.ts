import axios, { AxiosResponse } from 'axios'
import { User, UserProps } from './User'

export class Collection<T, K> {

    constructor(public rootUrl: string) {}

    fetch(): Promise<UserProps> {
     return axios.get(this.rootUrl).then((res: AxiosResponse): User[] => {

        return User.buildUser(res.data)

     })
    }
}
