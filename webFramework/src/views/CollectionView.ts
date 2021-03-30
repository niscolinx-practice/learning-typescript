import { Collection } from './../models/Collection';
export abstract class CollectionView {
    constructor(public parent: HTMLElement, public collection: Collection<>){

    }
}