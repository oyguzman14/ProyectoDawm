let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -2.133807, lng: -79.897713 },
    zoom: 20,
  });
}
