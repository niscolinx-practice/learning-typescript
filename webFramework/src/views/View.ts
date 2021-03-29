import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K> {
    regions: {[key: string]: Element} = {}

    constructor(public parent: HTMLElement | null, public model: T) {
        this.handleEventTrigger()
    }

    bindData = (): {
        [key: string]: (e: KeyboardEvent) => void
    } => {
        return {}
    }

    regionsMap = (): {
        [key: string] : string
    } => {
        return {}
    }

    abstract template(): string
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

    bindRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap()
    }



    render(): void {
        this.parent!.innerHTML = ''
        const htmlTemplate = document.createElement('template')

        htmlTemplate.innerHTML = this.template()

        this.bindEvents(htmlTemplate.content)
        this.parent!.append(htmlTemplate.content)
    }
}
