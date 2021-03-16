import { User } from './User'

const user = new User()
interface AddMaker {
    position: {
        lng: number
        lat: number
    }
}
export class CustomMap {
    private googleMarker: google.maps.Marker
    private googleMap: google.maps.Map
    private lat: number
    private lng: number

    constructor(mapElement: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(mapElement),
            {
                center: {
                    lat: 0,
                    lng: 0,
                },
                zoom: 1,
                zoomControl: true,
            }
        )
    }

    addMaker(maker: User): void {

        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng,
            },
        })
    }
}
