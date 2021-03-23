import { User } from './models/User'

const user = new User({})

//user.save()
user.on('change', () => {
    console.log(user)
})

user.set({
    name: 'collino',
    age: 24
})

user.fetch()

console.log(user.attibutes)



