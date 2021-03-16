
interface Maker {
    location: {
        lng: number
        lat: number
    }

    markerContent(): string
}
export class CustomMap {
    private googleMap: google.maps.Map
 

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

       const mark =  new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: maker.location.lat,
                lng: maker.location.lng,
            },
        })


        mark.addListener('click', () => {
           const infoWindow =  new google.maps.InfoWindow({
                content: maker.markerContent()
            })

            infoWindow.open(this.googleMap, mark)
        })
    }

    
}
