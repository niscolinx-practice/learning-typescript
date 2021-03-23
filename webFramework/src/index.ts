import { User } from './models/User'

const user = new User({})

//user.save()

user.set({
    name: 'Niscolinx',
    age: 24
})


user.on('change', () => {
    console.log('changed!!')
})
