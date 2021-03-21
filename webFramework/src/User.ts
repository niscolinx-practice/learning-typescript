interface UserProps {
    name?: string
    age?: number
}

type Callback = () => void

export class User {
    events!: {
        [key: string]: Callback[]
    }

    constructor(private data: UserProps) {}

    get(propName: string): number | string | undefined {
        return this.data[propName as keyof UserProps]
    }

    set(updateUserProp: UserProps): void {
        Object.assign(this.data, updateUserProp)
    }

    on(eventName: string, callback: Callback) {
        const handlers = this.events[eventName]
        handlers.push(callback)
    }
}
