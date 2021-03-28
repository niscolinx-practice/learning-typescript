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

    eventsData = (): { [key: string]: () => void } => {
        return {
            'click:btn': this.onHoverBtn,
            'mouseover:btn': this.onMouseOverBtn,
            'mouseenter:btn': this.onMouseOverBtn

        }
    }

    onHoverBtn(): void {
        console.log('button clicked')
    }

    onMouseOverBtn(): void {
        console.log('mouse on button')
    }

    eventToTrigger(fragment: DocumentFragment): void {
        // let eventing: string = ''
        // for (let eventName in this.eventsData) {
        //     const [event, selector] = eventName.split(':')

        //     if (eventToHandle === event) {
        //         eventing = eventName
                
        //     }
        // }

        console.log({fragment})
    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent!.append(htmlTemplate.content)

        //const btn = document.querySelector('.btn')

        this.eventToTrigger(htmlTemplate.content)
        // btn!.addEventListener('click', (e) => {
        // })
    }
}
