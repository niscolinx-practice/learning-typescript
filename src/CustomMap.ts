import { User } from './User';

const user = new User()
interface AddMaker{
    position: {
        lng: number,
        lat:number
    }
}
export class CustomMap {
    private googleMarker: google.maps.Marker
    private googleMap: google.maps.Map
    private lat: number
    private lng: number


    constructor(mapElement: string){
        this.googleMap = new google.maps.Map(document.getElementById(mapElement), {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1,
            zoomControl: true
        })

        this.googleMarker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: this.lat,
                lng: this.lng
            }
        })        
    }

    addMaker(lat:number, lng:number){
        this.lat = lat,
        this.lng = lng

        console.log(this.lng, this.lat)

        return this.googleMarker
    }
}