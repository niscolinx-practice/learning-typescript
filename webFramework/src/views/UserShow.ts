import { User, UserProps } from './../models/User'
import { View } from './View'

export class UserShoow extends View<User, UserProps> {
    template(): string {
        return `
            <div>
                <div></div>
                <div></div>
            </div>
        `
    }
}
