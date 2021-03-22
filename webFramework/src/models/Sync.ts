import axios from 'axios'

class Sync {
    constructor(private rootUrl: string)
    save(): void {
        const id = this.get('id')

        if (id) {
            console.log(this.rootUrl + id)
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
