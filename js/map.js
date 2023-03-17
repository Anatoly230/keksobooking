const map = L.map('map-canvas', {
    zoomSnap: 0.01,
})
    // .setView([55.889613, 37.638809], 15),
    .setView({
        lat: 55.889613,
        lng: 37.638809,

    }, 15),
    tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map),
    myIcon = L.icon({
        iconUrl: '../img/mp-pin_2.svg',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
    }),
    marker = L.marker(
        {
            lat: 55.889613,
            lng: 37.638809
        },
        {
            draggable: true,
            icon: myIcon,
        },
    ).addTo(map);

function getMarkerCoords(input, marker) {
    let coords = marker.getLatLng();
    input.value = `${coords.lat}, ${coords.lng}`
    marker.on('moveend', function (e) {
        coords = e.target.getLatLng();
        input.value = `${coords.lat}, ${coords.lng}`
    })
}

//     popup = L.popup()
//   .setLatLng([51.513, -0.09])
//   .setContent("I am a standalone popup.")
//   .openOn(map);
// marker2 = L.marker([55.889569, 37.639117]).addTo(map);
// circle = L.circle([55.889569, 37.639117], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.3,
//     radius: 100,
// }).addTo(map),
// polygon = L.polygon([
//     [55.889613, 37.638806],
//     [55.889576, 37.638791],
//     [55.889561, 37.638806]
//     [55.889556, 37.638811]
// ]).addTo(map);
// marker.bindPopup('<b>Hello world</b><br>I am a popup.');

function onMapClick(e) {
    console.log(e)
}

map.on('click', onMapClick)

export { map, getMarkerCoords, marker };