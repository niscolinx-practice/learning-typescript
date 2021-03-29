

export abstract class View {
    constructor(public parent: HTMLElement | null, public model: User) {
        this.handleEventTrigger()
    }

    inputValue: string[] = []

    handleEventTrigger(): void {
        this.model.on('change', () => {
            this.render()
        })
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsData = this.bindData()
        for (let events in eventsData) {
            const [eventName, selector] = events.split(':')

            const selectedElement = fragment.querySelectorAll(selector)

            selectedElement.forEach((Element) => {
                Element.addEventListener(eventName, (e) => {
                    eventsData[events](e as KeyboardEvent)
                })
            })
        }
    }

    render(): void {
        this.parent!.innerHTML = ''
        const htmlTemplate = document.createElement('template')

        htmlTemplate.innerHTML = this.template()

        this.bindEvents(htmlTemplate.content)
        this.parent!.append(htmlTemplate.content)
    }
}