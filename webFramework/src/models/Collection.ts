import axios, { AxiosResponse } from 'axios'

export class Collection<T, K> {

    constructor(public rootUrl: string) {}

    fetch(): Promise<void> {
     return axios.get(this.rootUrl).then((res: AxiosResponse): void => {
         console.log(res.data)

     })
    }
}
