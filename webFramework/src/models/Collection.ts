import { User, UserProps } from './User'
import axios from 'axios'

export class Collection<User, UserProps> {
    models: UserProps[] = []

    constructor(private rootUrl: string) {}

    async fetch(): Promise<UserProps> {
        const allUsers = await axios.get(this.rootUrl)
        console.log(allUsers.data)
        return this.models = allUsers.data
    }
}
