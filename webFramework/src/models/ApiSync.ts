import axios, { AxiosPromise } from "../../node_modules/axios/index"

interface HasId {
    id?: number
}
export class ApiSync<T extends HasId> {
    constructor(private rootUrl: string) {}

    save = (data: T): AxiosPromise => {
        const {id} = data

        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data)
        } else {
            return axios.post(this.rootUrl, data)
        }
    }

    fetch = (id: number): AxiosPromise => {
        return axios.get(`${this.rootUrl}/${id}`)
    }
}
