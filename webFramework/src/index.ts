import { userInfo } from 'node:os'
import { User } from './User'

const user = new User({ name: 'Collins', age: 23 })

console.log(user)
//user.save()


