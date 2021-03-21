interface UserProps {
    name: string
    age: number
    level?: string
}

export class User {
    constructor(private data: UserProps) {
        this.data = {
            name: 'Clinton', 
            age: 21,
            level: '400L'
        }
    }

    get(propName: string): number | string | undefined {
        return this.data[propName as keyof UserProps]
    }

    set(updateUserProp: UserProps): void{
    //    this.data = {
    //        ...this.data,
    //        updateUserProp
    //    }

    Object.assign(this.data, updateUserProp)

       console.log(this.data)
    }
}
