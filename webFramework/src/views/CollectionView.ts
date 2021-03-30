import { Collection } from './../models/Collection'
export abstract class CollectionView<T, K> {
    constructor(
        public parent: Element,
        public collection: Collection<T, K>
    ) {}


    abstract renderItem(model: T, itemParent: Element): void


    render(): void {
        this.parent!.innerHTML = ''

        const templateElement = document.createElement('template')

        console.log(this.collection)
        for(let model of this.collection.models){
            console.log('hellow')
            const itemParent = document.createElement('div')
            
            console.log(itemParent, model)
            this.renderItem(model, itemParent)
            templateElement.content.append(itemParent)
        }


        this.parent.append(templateElement.content)

    }
}
