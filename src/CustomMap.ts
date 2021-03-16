import { User } from './User'

const user = new User()
interface Maker {
    location: {
        lng: number
        lat: number
    }

    markerContent(): string
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

    addMaker(maker: Maker): void {

        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: maker.location.lat,
                lng: maker.location.lng,
            },
        })
    }
}
