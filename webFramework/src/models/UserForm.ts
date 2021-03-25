export class UserForm {
    constructor(public parent: Element) {}

    template(): string {
        return `
        <div>
            <h2>User Form</h2>
            <input></input>
            <button>click me!</button>
        </div>
    `
    }

    render(): void {
        const htmlTemplate = document.createElement('template')
        htmlTemplate.innerHTML = this.template()

        this.parent.append(htmlTemplate.content)
    }
}
