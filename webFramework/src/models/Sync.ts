import axios, { AxiosResponse } from 'axios'

interface HasId {
    id?: number
}
export class Sync<T extends HasId> {
    constructor(private rootUrl: string) {}

    save(): Promise<AxiosResponse> {
        if (id) {
            return axios.put(this.rootUrl + id, this.data)
        } else {
            return axios.post(this.rootUrl, this.data)
        }
    }

    fetch(): Promise<AxiosResponse> {
        return axios.get(this.rootUrl + this.data)
    }
}
