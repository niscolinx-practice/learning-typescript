import { Attributes } from './Attributes'
import { Sync } from './Sync'
import { Events } from './Events'
import { AxiosResponse } from 'axios'

export interface UserProps {
    name?: string
    age?: number
    id?: number
}

const URL = 'http://localhost:3000/users'

export class User {
    events: Events = new Events()
    sync: Sync<UserProps> = new Sync<UserProps>(URL)
    attibutes: Attributes<UserProps>

    constructor(private attrs: UserProps) {
        this.attibutes = new Attributes<UserProps>(this.attrs)
    }

    get get() {
        return this.attibutes.get
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }
    set(update: UserProps): void {
        this.attibutes.set(update)
        this.events.trigger('change')
    }

    fetch(): void {
        const id = this.get('id')
        if (!id) {
            throw new Error('id is undefined')
        } else {
            this.sync.fetch(id).then((res: AxiosResponse) => {
                this.set(res.data)
                this.events.trigger('fetched')
            })
        }
    }

    save(): void {
        this.sync.save(this.attibutes.getAll()).then((res: AxiosResponse) => {
            this.set(res.data)
            this.events.trigger('saved')
        })
    }
}
