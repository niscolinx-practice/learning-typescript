import axios, { AxiosResponse } from '../../../node_modules/axios/index'
import { Events } from './Events'

export class Collection<T, K> {
    models: T[] = []
    events: Events = new Events()


    constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

    fetch(): void {
        axios.get(this.rootUrl).then((res: AxiosResponse) => {
            res.data.forEach((eachUser: K) => {
                this.models.push(this.deserialize(eachUser))

                console.log(this.models)
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
