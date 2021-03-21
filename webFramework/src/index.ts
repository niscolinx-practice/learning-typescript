import { User } from "./User";

const user = new User({name: 'Collins', age: 52})

console.log(user.get('name'))