interface UserProps {
    name: string
    age: number
}

class User {
    constructor(public propName: UserProps) {}

    getUser(prop: number | string): UserProps {
        return this.propName[prop]
    }
}
