import { Model } from './models/Model';
import { User } from './models/User';
import { UserForm } from './views/UserForm'

const userForm = new UserForm(document.getElementById('root'), User.buildUser({
    name: 'Collins',
    age: 31
}))

userForm.render()

