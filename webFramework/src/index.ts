import { User } from './models/User'

const user = new User({})

//user.save()
user.on('change', () => {
    console.log('User was changed, you should do something in html')
})

user.set({
    name: 'Niscolinx',
    age: 24
})



