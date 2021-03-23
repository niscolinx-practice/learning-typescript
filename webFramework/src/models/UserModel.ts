import { AxiosPromise } from 'axios';
interface Sync<T> {
    save(data: T): AxiosPromise
}

export class UserModel {


}