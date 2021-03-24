import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'

// const user = User.buildUser({
//     id: 1
// })

// //user.save({name: 'Roller', age: 532}))
// user.on('change', () => {
//     console.log('updated user', user)
// })

// user.on('fetch', () => {
//     console.log('fetched user')
// })

// user.on('save', () => {
//     console.log('saved a new user')
// })

// // user.set({
// //     age: 246,
// //     name: 'name',
// // })

// //user.save()
// user.fetch()

const collection = new Collection<User, UserProps>(
    'http://localhost:3000/users',
    User.buildUser
)
collection.fetch()
