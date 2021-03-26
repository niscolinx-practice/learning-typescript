export class UserForm {
    constructor(public parent: HTMLElement | null) {}

    template(): string {
        return `
        <div>
            <h2>User Form</h2>
            <input></input>
            <button class='btn'>click me!</button>
        </div>
    `
    }

    eventsData: { [key: string]: () => void } = {
        'click:btn': this.onHoverBtn,
        'mouseover:btn': this.onMouseOverBtn,
        'mouseenter:btn': this.onMouseOverBtn,
    }

    onHoverBtn(): void {
        console.log('button hover')
    }

    onMouseOverBtn(): void {
        console.log('mouse on button')
    }

    eventToTrigger(eventToHandle: string): void {
        console.log(eventToHandle)
        let eventing: string = ''
        for (let eventName in this.eventsData) {
            const [event, selector] = eventName.split(':')

            if (eventToHandle === event) {
                console.log(eventToHandle, event)
                eventing = eventName
                return
            }
        }

        console.log({eventing})

        return this.eventsData[eventing]()
    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent!.append(htmlTemplate.content)

        const btn = document.querySelector('.btn')

        btn!.addEventListener('mouseenter', (e) => {
            this.eventToTrigger(e.type)
        })
    }
}
