import { UserProps } from './User';

export class Attributes<T> {
    constructor(private data: T) {}

    get<K extends keyof T>(key: K): T[K] {
        return this.data[key]
    }

    set(updateUserProp: T): void {
        Object.assign(this.data, updateUserProp)
    }
}

const attrs = new Attributes<UserProps>({
    name: 'hello', 
    age: 523,
    id: 5
})


