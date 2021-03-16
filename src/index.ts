 import {User} from './User'
// import {Company} from './Company'

const user = new User()

const mapElement = document.getElementById('map')
new google.maps.Map(mapElement, {
    center: {
        lat: user.location.lat,
        lng: user.location.lng
    },
    zoom: 1,
    zoomControl: true
})