import { User } from './../models/User'
export class UserForm {
    constructor(public parent: HTMLElement | null, public model: User) {
        this.handleEventTrigger()
    }
    
    inputValue: string[] = []

    handleEventTrigger(): void {
        this.model.on('change', () => {
            this.render()
        })
    }

    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <h3>Name: ${this.model.get('name')}</h3>
            <h3>Age: ${this.model.get('age')}</h3>
            <input class='input-name'/>
            <button class='set-name'>Change Name</button>
            <button class='set-age'>Random Age</button>
        </div> 
    `
    }

    eventsData = (): { [key: string]: (e?: HTMLInputElement | undefined) => void } => {
        return {
            'input:.input-name': this.onSetInput,
            'click:.set-name': this.onSetName,
            'click:.set-age': this.onSetAge,
        }
    }
    onSetAge = (): void => {
        this.model.setRandomAge()
    }

    onSetInput = (e: HTMLInputElement | undefined): void => {
        this.inputValue.push(e!.target.value)
        
        if(this.inputValue.length > 1){
            this.inputValue.shift()
        }
    }

    onSetName = () => {
        console.log(this.inputValue.join(''))
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
        this.parent!.innerHTML = ''
        const htmlTemplate = document.createElement('template')
        
        htmlTemplate.innerHTML = this.template()

        this.handleEvents(htmlTemplate.content)
        this.parent!.append(htmlTemplate.content)
    }
}
