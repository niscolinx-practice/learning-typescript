import { User, UserProps } from './User';
import axios from 'axios'

export class Collection<User, UserProps> {
    
    constructor(private rootUrl: string ){
    
    }
}