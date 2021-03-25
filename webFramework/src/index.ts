import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'

const collection = new Collection<User, UserProps>(
    'http://localhost:3000/users',
    User.buildUser
)
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


setTimeout(() => {
    console.log(collection.models)
}, 3000);


const main = async() => {
    await collection.fetch()

}

main()