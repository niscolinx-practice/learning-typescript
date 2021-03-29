import axios, { AxiosResponse } from 'axios'
import { Events } from './Events'

export class Collection<T, K> {
    models: T[] = []
    events: Events = new Events()

    constructor(private rootUrl: string, private deserialize: (json: K) => T) {}

    fetch(): void {
        axios.get(this.rootUrl).then((res: AxiosResponse) => {
            res.data.forEach((eachUser: K) => {
                this.models.push(this.deserialize(eachUser))
            })
        })
        
        this.trigger('fetch')
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }
}
