import axios from 'axios'

export class Sync<T> {
    constructor(private rootUrl: string, data: T){}
    save(): void {
        const id = this.get('id')

        if (id) {
            axios.put(this.rootUrl + id, this.data)
        } else {
            axios.post(this.rootUrl, this.data)
        }
    }

    fetch(): void {
        axios
            .get(this.rootUrl + this.get('id'))
            .then((res: AxiosResponse) => {
                this.set(res.data)
            })
            .catch((err) => {
                throw new Error(err)
            })
    }
}
