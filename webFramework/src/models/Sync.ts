import axios, { AxiosResponse } from 'axios'

interface HasId {
    id?: number
}
export class Sync<T extends HasId> {
    constructor(private rootUrl: string, private data: T) {}
    save(): void {
        const { id } = this.data

        if (id) {
            axios.put(this.rootUrl + id, this.data)
        } else {
            axios.post(this.rootUrl, this.data)
        }
    }

    fetch(): Promise<AxiosResponse<any>>d {
        return axios.get(this.rootUrl + this.data)
    }
}
