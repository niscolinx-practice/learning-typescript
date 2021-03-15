import faker from 'faker'

class User {
    name: string;
    location: {
        lat: string;
        lng: string
    }

    constructor(){
        this.name = faker.name.firstName()
       
    }
}

const user = new User()
console.log(user.name, user.location)