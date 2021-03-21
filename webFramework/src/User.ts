interface UserProps {
    name: string
    age: number
}

export class User {
    constructor(private data: UserProps) {}

    get(propName: string): number | string {
        return this.data[propName as keyof UserProps]
    }

    set(userProp: UserProps): void{
        this.data.age = userProp.age,
        this.data.name = userProp.name
    }
}
