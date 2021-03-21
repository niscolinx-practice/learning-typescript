interface UserProps {
    name: string
    age: number
}

export class User {
    constructor(private data: UserProps) {}

    get(propName: string): number | string {
        return this.data[propName]
    }

    set(userProp: UserProps): UserProps{
        this.data.age = userProp.age,
        this.data.name = userProp.name
    }
}
