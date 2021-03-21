interface UserProps {
    name: string
    age: number
}

class User {
    constructor(public data: UserProps) {}

    getUser(propName:string): number | string {
        return this.data[propName]
    }
}
