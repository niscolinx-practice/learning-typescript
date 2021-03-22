interface UserProps {
    name?: string
    age?: number
    id?: number
}

type Callback = () => void

export class User {
    events: {
        [key: string]: Callback[]
    } = {}

    constructor(private data: UserProps) {}

    get(propName: string): number | string | undefined {
        return this.data[propName as keyof UserProps]
    }

    set(updateUserProp: UserProps): void {
        Object.assign(this.data, updateUserProp)
    }

    on(eventName: string, callback: Callback) {
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }

    trigger(eventName: string):void{
        const handler = this.events[eventName]

        if(!handler || handler.length === 0){
            return
        }

        handler.forEach((event) => {
            event()
        })
    }
}
