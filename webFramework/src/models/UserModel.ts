import { AxiosPromise } from 'axios';
interface Sync<T> {
    save(data: T): AxiosPromise

    fetch(id: number): AxiosPromise
}



export class UserModel {


}