import axios, { AxiosResponse } from 'axios'
import { Events } from '../Events/Events'

interface UserProps {
    name?: string
    age?: number
    id?: number
}


const URL = 'http://localhost:3000/users/'

export class User {
    events: Events = new Events()

    constructor(private data: UserProps) {}

    get(propName: string): number | string | undefined {
        return this.data[propName as keyof UserProps]
    }

    set(updateUserProp: UserProps): void {
        Object.assign(this.data, updateUserProp)
    }

   
    

    save(): void {
        const id = this.get('id')

        if (id) {
            console.log(URL + id)
            axios
                .put(URL + id, this.data)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        } else {
            axios
                .post(URL, this.data)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        }
    }

    fetch(): void {
        axios
            .get(URL + this.get('id'))
            .then((res: AxiosResponse) => {
                this.set(res.data)
            })
            .catch((err) => {
                throw new Error(err)
            })
    }
}
