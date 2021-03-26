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
        'mouseOver:btn': this.onMouseOverBtn,
        'mouseEnter:btn': this.onMouseOverBtn,
    }

    onHoverBtn(): void {
        console.log('button hover')
    }

    onMouseOverBtn(): void {
        console.log('mouse on button')
    }

    eventToTrigger(eventToHandle: string): void {
        let eventing: string = ''
        for (let eventName in this.eventsData) {
            const [event, selector] = eventName.split(':')

            if (eventToHandle === event) {
                eventing = eventName

            }
        }

        console.log(eventing)

        return this.eventsData[eventing]()
    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent!.append(htmlTemplate.content)

        const btn = document.querySelector('.btn')

        //console.log(this.eventToTrigger('click'))

        btn!.addEventListener('mouseEnter', (e) => {
            console.log(e)
        })
    }
}
