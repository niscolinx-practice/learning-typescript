import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
 import { UserEdit } from './views/UserEdit';
 import { User, UserProps } from './models/User';
import { UserForm } from './views/UserForm'

// const user = User.buildUser({
//         name: 'Collins',
//         age: 31,
//     })
//     const userEdit = new UserEdit(document.getElementById('root'), user)
    
//     console.log({userEdit})
    
//     userEdit.render()
    
    const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
        return User.buildUser(json)
    })
    const root = document.getElementById('root')
    users.on('change', () => {
        console.log({users})
        if(root){
            console.log({root})
            new UserList(root, users)
        }

    })
    
users.fetch()

 