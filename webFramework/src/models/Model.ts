import { AxiosPromise, AxiosResponse } from 'axios'
interface Sync<T> {
    save(data: T): AxiosPromise

    fetch(id: number): AxiosPromise
}
interface Attrs<T> {
    get<K extends keyof T>(key: K): T[K]

    set(update: T): void
}

interface Events {
    on(eventName: string, callback: () => void): void

    trigger(eventName: string): void
}


interface HasId{
    id?: number
}
export class Model<T extends HasId> {


    constructor(private attributes: Attrs<T>, private events: Events, private sync: Sync<T>){

    }

    get get() {
        return this.attributes.get
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }
    set(update: T): void {
        this.attributes.set(update)
        this.events.trigger('change')
    }

    fetch(): void {
        const id = this.get('id')
        if (!id) {
            throw new Error('id is undefined')
        } else {
            this.sync.fetch(id).then((res: AxiosResponse) => {
                this.set(res.data)
                this.events.trigger('fetch')
            })
        }
    }

    save(): void {
        this.sync.save(this.attributes.getAll()).then((res: AxiosResponse) => {
            this.set(res.data)
            this.events.trigger('save')
        })
    }
}
