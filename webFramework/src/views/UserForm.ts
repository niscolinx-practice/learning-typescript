import { User } from './../models/User';
export class UserForm {
    constructor(public parent: HTMLElement | null, public model: User) {
    }

    
    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <h3>Name: ${this.model.get('name')}</h3>
            <h3>Age: ${this.model.get('age')}</h3>
            <input/>
            <button class='set-name'>Change Name</button>
            <button class='set-age'>Random Age</button>
        </div> 
    `
    }

    eventsData = (): { [key: string]: () => void } => {
        return {
            'click:.set-age': this.onSetAge,
            'click:.set-name': this.onSetName,
        }
    }
    onSetAge(): void {
        console.log('set random age')
    }

    onSetName(): void {
        console.log('the name was changed!')
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
