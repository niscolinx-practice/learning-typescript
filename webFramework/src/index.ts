import { User } from './models/User'

const user = new User({ name: 'Nelon', age: 23 })

console.log(user)
user.save()




