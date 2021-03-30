import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
// import { UserEdit } from './views/UserEdit';
 import { User, UserProps } from './models/User';
// import { UserForm } from './views/UserForm'

// const user = User.buildUser({
    //     name: 'Collins',
    //     age: 31,
    // })
    // const userEdit = new UserEdit(root, user)
    
    // console.log({userEdit})
    
    // userEdit.render()
    
    const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
        console.log({json})
        return User.buildUser({name: 'Collins'})
    })
    
    users.on('change', () => {
        
        const root = document.getElementById('root')

        if(root){
            new UserList(root, users).render()
        }
})

users.fetch()

 