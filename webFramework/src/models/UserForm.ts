
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

    eventsData = {
        'click:btn': this.onHoverBtn(),
        'mouseOver:btn': this.onMouseOverBtn,
    }

    onHoverBtn(): void{
        console.log('button hover')
    }

    onMouseOverBtn():void{
        console.log('mouse on button')
    }

    eventToTrigger(eventName: string){

        console.log('event to lookup', eventName)
        for(let events in this.eventsData){
            const [event, selector] = events.split(':')
            console.log(event, selector)
            if(eventName === event) return

            console.log(event, '')
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

