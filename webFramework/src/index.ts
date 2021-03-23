import { User } from './models/User'

const user = new User({ name: 'Collins', age: 524, id: 3})

//user.save()

user.set({
    name: 'Niscolinx',
    age: 24
})


user.fetch(2)

setTimeout(() => {
    console.log(user.get('name'))
    
}, 3000);

user.on('click', () => {
    console.log('clicked')
})

user.trigger('click')