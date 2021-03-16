
export class CustomMap {
    private googleMap: google.maps.Map
    public googleMarker: google.maps.Marker

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

    addMaker(){
        
    }
}