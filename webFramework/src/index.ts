import { User } from "./User";

const user = new User({name: 'Collins', age: 52})

user.set({name: 'Hello', age: 12})
console.log(user.get('name'))