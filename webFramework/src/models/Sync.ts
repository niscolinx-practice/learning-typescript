class Sync {

    constructor(private rootUrl: string)
    save(): void {
        const id = this.get('id')

        if (id) {
            console.log(URL + id)
            axios
                .put(URL + id, this.data)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        } else {
            axios
                .post(URL, this.data)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        }
    }

    fetch(): void {
        axios
            .get(URL + this.get('id'))
            .then((res: AxiosResponse) => {
                this.set(res.data)
            })
            .catch((err) => {
                throw new Error(err)
            })
    }
}