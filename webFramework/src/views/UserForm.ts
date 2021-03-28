export class UserForm {
    constructor(public parent: HTMLElement | null) {}

    template(): string {
        return `
        <div>
            <h2>User Form</h2>
            <input></input>
            <button class='btn' id='btn'>click me!</button>
        </div> 
    `
    }

    eventsData = (): { [key: string]: () => void } => {
        return {
            'click:.btn': this.onSetAge,
            'click:#btn': this.onSetAge,
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

            const selectedElement = fragment.getElementById('btn')
            console.log({selectedElement})
            // selectedElement.forEach(Element => {
            //     console.log({Element})
            //     Element.addEventListener(eventName, eventsData[eventName])
            // })
        }
        



    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent!.append(htmlTemplate.content)

        //const btn = document.querySelector('.btn')

        this.handleEvents(htmlTemplate.content)
        // btn!.addEventListener('click', (e) => {
        // })
    }
}
