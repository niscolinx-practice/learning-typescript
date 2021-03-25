import { User } from './models/User'

const collection = User.buildUserCollection()

collection.on('fetch', () => {
    console.log(collection)
})


collection.fetch()




