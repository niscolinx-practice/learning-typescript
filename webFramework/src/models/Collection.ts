import axios, { AxiosResponse } from '../../node_modules/axios/index'
import { Events } from './Events'

export class Collection<T, K> {
    models: T[] = []
    events: Events = new Events()

    constructor(private rootUrl: string, private deserialize: (json: K) => T) {}

    fetch(): Promise<void> {
       return axios.get(this.rootUrl).then((res: AxiosResponse): void => {
            res.data.forEach((eachUser: K) => {
                this.models.push(this.deserialize(eachUser))
            })
            this.trigger('fetch')
        })

    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }
}
