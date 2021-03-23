import { User, UserProps } from './User';
import axios from 'axios'

export class Collection<User, UserProps> {

    models: UserProps[]
    
    constructor(private rootUrl: string ){
    
    }

    async fetch(){
       const allUsers =  await axios.get(this.rootUrl)
       
    }
}