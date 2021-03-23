import { User } from './models/User'

const user = new User({})

//user.save()
user.on('change', () => {
    console.log('changed!!')
})

user.set({
    name: 'Niscolinx',
    age: 24
})



