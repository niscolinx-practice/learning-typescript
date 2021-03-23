import { AxiosPromise } from 'axios';
interface Sync<T> {
    save(data: T): AxiosPromise

    fetch(id: number): AxiosPromise
}

interface Attrs<T> {
    get<K extends keyof T>(key: K): T[K]

    set(update: T): void
}

export class UserModel {


}