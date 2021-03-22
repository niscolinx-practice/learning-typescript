import axios, { AxiosResponse } from 'axios'

interface HasId {
    id?: number
}
export class Sync<T extends HasId> {
    constructor(private rootUrl: string) {}

    save(data: T): Promise<AxiosResponse> {
        const {id} = data

        if (id) {
            return axios.put(this.rootUrl + id, data)
        } else {
            return axios.post(this.rootUrl, data)
        }
    }

    fetch(id: number): Promise<AxiosResponse> {
        return axios.get(this.rootUrl + id)
    }
}
