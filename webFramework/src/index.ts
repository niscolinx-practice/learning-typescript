import { User } from './models/User'

const collection = User.buildUserCollection()

collection.on('fetch', () => {
    console.log('fetched users')
})


collection.fetch()

setTimeout(() => {
       console.log(collection.models)
}, 3000);


