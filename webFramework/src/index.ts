import { User } from './models/User'

const user = new User({})

//user.save({name: 'Roller', age: 532}))
user.on('change', () => {
    console.log('updated user', user)
})

user.on('fetch', () => {
    console.log('fetched user')
})

user.on('save', () => {
    console.log('saved a new user')
})

// user.set({
//     age: 246,
//     name: 'name',
// })

// user.save()
user.fetch()

console.log(user.attibutes)



