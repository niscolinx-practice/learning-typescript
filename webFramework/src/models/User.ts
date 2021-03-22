import { Sync } from './Sync'
import axios, { AxiosResponse } from 'axios'
import { Events } from './Events'

interface UserProps {
    name?: string
    age?: number
    id?: number
}

const URL = 'http://localhost:3000/users'

export class User {
    events: Events = new Events()
    sync: Sync<UserProps> = new Sync<UserProps>(URL, this.data)

    constructor(private data: UserProps) {}

    get(propName: string): number | string | undefined {
        return this.data[propName as keyof UserProps]
    }

    set(updateUserProp: UserProps): void {
        Object.assign(this.data, updateUserProp)
    }
    
}
