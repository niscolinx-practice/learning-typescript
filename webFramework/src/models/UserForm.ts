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

    eventsData : {

        [key: string] : () => void
       
    }

    //  'click:btn': this.onHoverBtn,
    //     'mouseOver:btn': this.onMouseOverBtn,

    onHoverBtn(): void {
        console.log('button hover')
    }

    onMouseOverBtn(): void {
        console.log('mouse on button')
    }

    eventToTrigger(eventName: string): void {
        let methodToRun: () => void
        for (let events in this.eventsData) {
            const [event, selector] = events.split(':')

            console.log(this.eventsData, events)
            console.log(this.eventsData[])
            if (eventName === event) {
                return
            }
            break
        }
    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent!.append(htmlTemplate.content)

        const btn = document.querySelector('.btn')

        console.log(this.eventToTrigger('click'))
    }
}
