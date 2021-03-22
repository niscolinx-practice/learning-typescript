import { User } from './User'

const user = new User({})

user.set({
    name: 'collins',
    age: 24
})

console.log(user.get('id'))
user.fetch()

