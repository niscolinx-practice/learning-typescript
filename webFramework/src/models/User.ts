import { Attributes } from './Attributes';
import { Sync } from './Sync'
import { Events } from './Events'

export interface UserProps {
    name?: string
    age?: number
    id?: number
}

const URL = 'http://localhost:3000/users'

export class User {
    events: Events = new Events()
    sync: Sync<UserProps> = new Sync<UserProps>(URL, this.data)
    attibutes: Attributes<UserProps> = new Attributes<UserProps>(this.data)

    constructor(private data: UserProps) {}


    
}
