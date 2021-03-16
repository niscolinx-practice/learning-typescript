import { CustomMap } from './CustomMap';
 import {User} from './User'
// import {Company} from './Company'

const user = new User()

const customMap = new CustomMap('map')

customMap.addMaker(user.location.lat, user.location.lng)
customMap.addMaker(user.location.lat, user.location.lng)
customMap.addMaker(user.location.lat, user.location.lng)

