//initialize & add map//
function initMap() {
    const loc = { lat: 42.361145, lng: -71.057083 };
    // centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });


    const marker = new google.maps.Marker({ position: loc, map: map });
}