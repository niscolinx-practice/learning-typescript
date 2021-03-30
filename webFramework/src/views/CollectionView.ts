import { Collection } from './../models/Collection';
export abstract class CollectionView<T, K> {
    constructor(public parent: HTMLElement, public collection: Collection<T, K>){

    }
}