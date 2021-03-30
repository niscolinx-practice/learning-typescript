import axios, { AxiosResponse } from '../../../node_modules/axios/index'
import { Events } from './Events'

export class Collection<T, K> {
    models: T[] = []
    events: Events = new Events()


    constructor(private rootUrl: string, private deserialize: (json: K) => T) {}

    fetch(): void {
        axios.get(this.rootUrl).then((res: AxiosResponse) => {
            console.log(res.data)
            res.data.forEach((eachUser: K) => {
                console.log(eachUser)
                this.models.push(this.deserialize(eachUser))

                console.log(this.deserialize(eachUser))
                console.log(this.models)
            })
        })
        
        this.trigger('change')
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }
}
