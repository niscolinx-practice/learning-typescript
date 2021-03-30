import { User, UserProps } from './../models/User'
import { View } from './View'

export class UserShow extends View<User, UserProps> {
    
    template(): string {

        console.log('usershow')
        
        return `
            <div>
            <h1>User Details</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User Age: ${this.model.get('age')}</div>
            </div>
        `
    }
}
