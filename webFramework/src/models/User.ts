import { Attributes } from './Attributes';
import { Events } from './Events';
import { ApiSync } from './ApiSync';
import { Model } from './Model'

export interface UserProps {
    name?: string
    age?: number
    id?: number
}

const URL = 'http://localhost:3000/users'

export class User extends Model<UserProps> {

    static buildUser(attrs: UserProps): User{

        return new User(
            new Attributes<UserProps>(attrs),
            new Events(),
            new ApiSync<UserProps>(URL)
        )
    }

}
