import { User } from './../models/User';
export class UserForm {
    constructor(public parent: HTMLElement | null, public model: User) {}

    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <h3></h3>
            <input></input>
            <button class='btn'>click me!</button>
        </div> 
    `
    }

    eventsData = (): { [key: string]: () => void } => {
        return {
            'click:.btn': this.onSetAge,
        }
    }
    onSetAge(): void {
        console.log('set random age')
    }

    handleEvents(fragment: DocumentFragment): void {
        const eventsData = this.eventsData()
        for (let events in eventsData) {
            const [eventName, selector] = events.split(':')

            const selectedElement = fragment.querySelectorAll(selector)

            selectedElement.forEach((Element) => {
                Element.addEventListener(eventName, eventsData[events])
            })
        }
    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.handleEvents(htmlTemplate.content)
        this.parent!.append(htmlTemplate.content)
    }
}
