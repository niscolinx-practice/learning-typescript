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
            'click:.btn': this.onSetAge,
        }
    }
    onSetAge(): void {
        console.log('set random age')
    }

    handleEvents(fragment: DocumentFragment): void {

        const eventsData = this.eventsData()
        for(let events in eventsData){
            const [eventName, selector] = events.split(':')

            console.log(eventName, selector)

            const selectedElement = fragment.querySelectorAll(selector)
            console.log({selectedElement})
            selectedElement.forEach(Element => {
                Element.addEventListener(eventName, eventsData[events])
            })
        }
        



    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.handleEvents(htmlTemplate.content)
        this.parent!.append(htmlTemplate.content)

        //const btn = document.querySelector('.btn')

        // btn!.addEventListener('click', (e) => {
        // })
    }
}
