
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

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent!.append(htmlTemplate.content)

        const btn = document.querySelector('.btn')
    }
}

