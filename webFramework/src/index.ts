import { User } from './models/User'

const user = new User({})

//user.save()
user.on('change', () => {
    console.log(user)
})

user.set({
    age: 246
})

//user.fetch()

console.log(user.attibutes)



