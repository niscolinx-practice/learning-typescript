 import {User} from './User'
// import {Company} from './Company'

const user = new User()

const mapElement = document.getElementById('map')

console.log({user}, mapElement)

new google.maps.Map(mapElement, {
    center: {
        lat: 0,
        lng: 0
    },
    zoom: 1,
    zoomControl: true
})

new google.maps.Marker({
    title: 'here'
})