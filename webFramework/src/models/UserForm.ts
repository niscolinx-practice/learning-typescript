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

    eventsData: { [key: string]:  void } = {
        'click:btn': this.onHoverBtn(),
        'mouseOver:btn': this.onMouseOverBtn(),
        'mouseEnter:btn': this.onMouseOverBtn(),
    }

    onHoverBtn(): void {
        console.log('button hover')
    }

    onMouseOverBtn(): void {
        console.log('mouse on button')
    }

    eventToTrigger(eventName: string): void {
        let count: number = 0
        for (let events in this.eventsData) {
            const [event, selector] = events.split(':')

            if (eventName === event) {
                count++
                console.log(eventName, event)
                console.log(this.eventsData[event])
            return this.eventsData[event]
            }
        
        }

        console.log(count)
    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent!.append(htmlTemplate.content)

        const btn = document.querySelector('.btn')

        console.log(this.eventToTrigger('mouseEnter'))
    }
}
