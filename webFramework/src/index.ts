import { User } from './User'

const user = new User({})

user.set({
    name: 'collins',
    age: 24
})

user.save()
console.log(user)
console.log(user.get('id'))
user.fetch()

