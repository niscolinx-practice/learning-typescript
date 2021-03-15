import faker from 'faker'

class User {
    name: string;
    location: {
        lat: string;
        lng: string
    }

    constructor(){
        this.name = faker.name.firstName()
        this.location = {
            lat : faker.address.latitude(),
            lng : faker.address.longitude()

        }
    }
}

