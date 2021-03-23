import axios from 'axios'

export class Collection {

    constructor(public rootUrl: string) {}

    async fetch(): Promise<void> {
        const allUsers = await axios.get(this.rootUrl)
        console.log(allUsers.data)
    }
}
