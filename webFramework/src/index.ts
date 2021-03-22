import { User } from './User'

const user = new User({})

user.on('click', () => {
    console.log('click 1')
})
user.on('click', () => {
    console.log('click 2')
})
user.on('mouseOver', () => {
    console.log('mouse over fired')
})

user.trigger('click')

console.log(user.events)
