import axios, { AxiosResponse } from 'axios'

interface HasId {
    id?: number
}
export class Sync<T extends HasId> {
    data: T = void;

    constructor(private rootUrl: string) {}
    save(): Promise<AxiosResponse> {
        const { id } = this.data

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
