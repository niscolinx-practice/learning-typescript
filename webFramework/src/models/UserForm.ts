export class UserForm {
    constructor(public parent: Element) {}

    template() {
        ;`
        <div>
            <h2>User Form</h2>
            <input></input>
            <button>click me!</button>
        </div>
    `
    }

    render(): void {
        const htmlTemplate = document.createElement('fragment')
    }
}
