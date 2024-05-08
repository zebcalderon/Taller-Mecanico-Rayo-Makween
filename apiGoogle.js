function iniciarMap(){
    let coord = {lat:-32.9701322 ,lng: -71.5121999};
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}