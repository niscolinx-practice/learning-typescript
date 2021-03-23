import { User } from './models/User'

const user = new User({})

//user.save()

user.set({
    name: 'Niscolinx',
    age: 24
})


user.fetch(6)

setTimeout(() => {
    console.log(user.get('name'))
    
}, 3000);

user.on('click', () => {
    console.log('clicked')
})

user.trigger('click')