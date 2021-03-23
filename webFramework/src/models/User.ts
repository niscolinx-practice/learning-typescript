

export interface UserProps {
    name?: string
    age?: number
    id?: number
}

const URL = 'http://localhost:3000/users'

export class User extends {
    events: Events = new Events()
    sync: Sync<UserProps> = new Sync<UserProps>(URL)
    attibutes: Attributes<UserProps>

    constructor(private attrs: UserProps) {
        this.attibutes = new Attributes<UserProps>(this.attrs)
    }

  
}
