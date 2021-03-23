import { User } from './models/User'

const user = new User({})

//user.save()
user.on('change', () => {
    console.log('User was changed, you should do something in html')
})

// user.set({
//     name: 'collino',
//     age: 24
// })

user.fetch(1)

console.log(user.attibutes)



