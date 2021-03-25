import { Collection } from './models/Collection'
import { User } from './models/User'

const collection = User.buildUserCollection()
// const user = User.buildUser({
//     id: 1
// })

// //user.save({name: 'Roller', age: 532}))
// user.on('change', () => {
//     console.log('updated user', user)
// })


collection.on('fetch', () => {
    console.log('fetched users')
})


// user.on('save', () => {
//     console.log('saved a new user')
// })

// // user.set({
// //     age: 246,
// //     name: 'name',
// // })

// //user.save()
// user.fetch()

collection.fetch()

setTimeout(() => {
       console.log(collection.models)
}, 3000);


