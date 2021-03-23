import { User } from './models/User'

const user = new User({ name: 'Collins', age: 524, id: 3})

console.log(user)
//user.save()

// console.log(user.get('name'))

user.on('click', () => {
    console.log('clicked')
})