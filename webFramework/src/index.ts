import { User } from './models/User'

const user = new User({ name: 'Nel', age: 23, id: 2})

console.log(user)
user.save()




