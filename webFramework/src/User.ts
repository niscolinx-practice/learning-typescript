interface UserProps {
    name: string
    age: number
}

export class User {
    constructor(private data: UserProps) {
        this.data = {
            name: 'Clinton', 
            age: 21,
        }
    }

    get(propName: string): number | string {
        return this.data[propName as keyof UserProps]
    }

    set(updateUserProp: UserProps): void{
     
   Object.assign(this.data, updateUserProp)

       console.log(this.data)
    }
}
