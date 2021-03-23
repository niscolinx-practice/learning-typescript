import { User } from './models/User'

const user = new User({})

//user.save({name: 'Roller', age: 532}))
user.on('change', () => {
    console.log(user)
})

// user.set({
//     age: 246,
//     name: 'helo'
// })

//user.save()
user.fetch()

console.log(user.attibutes)



