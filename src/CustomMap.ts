
export class CustomMap {
    googleMap: google.maps.Map

    constructor(mapElement: string){
        this.googleMap = new google.maps.Map(document.getElementById(mapElement), {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1,
            zoomControl: true
        })
    }
}