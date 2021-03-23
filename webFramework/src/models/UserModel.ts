import { AxiosPromise } from 'axios'
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

export class UserModel<T> {}
