 type Callback = () => void

export class Events {
    events: {
        [key: string]: Callback[]
    } = {}
    
    on = (eventName: string, callback: Callback) => {
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }

    trigger = (eventName: string): void => {
        const handler = this.events[eventName]

        if (!handler || handler.length === 0) {
            return
        }

        handler.forEach((event) => {
            event()
        })
    }
}