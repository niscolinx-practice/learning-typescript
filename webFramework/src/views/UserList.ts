import { UserShow } from './UserShow';
import { User, UserProps } from './../models/User';
import { CollectionView } from "./CollectionView";

export class UserList extends CollectionView<User, UserProps> {


    renderItem(model: User, itemParent: HTMLElement){
        console.log({model})
        new UserShow(itemParent, model).render()
    }
}