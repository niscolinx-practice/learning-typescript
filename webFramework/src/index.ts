import { User } from './models/User';
import { UserForm } from './views/UserForm'

const root = document.getElementById('root')
const user = User.buildUser({
    name: 'Collins',
    age: 31,
})
const userForm = new UserForm(root, user)

userForm.render()

 