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

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent?.append(htmlTemplate.content)

        const btn = document.querySelector('.btn')
        btn?.addEventListener('click', () => {
            console.log('button has been clicked')
        })
    }
}
