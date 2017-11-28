function initMap() {
    
    var infowindow = null;
    var mapOptions = {
      zoom: 7,
      center: new google.maps.LatLng(46.5, -93.5),
      zoomControl: true,
      streetViewControl: false,
      panControl: false,
      mapTypeControl: false,
      gestureHandling: 'cooperative',
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      }
    }
  
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var oms = new OverlappingMarkerSpiderfier(map);
  
    var styles = [
      {
        elementType: "geometry",
        stylers: [
          { hue: "#007fff" },
          { visibility: "simplified" },
          { gamma: 1.53 },
          { saturation: 38 },
          { lightness: 6 }
        ]
        },
     { featureType: "road.highway",
       stylers: [
         { visibility: "on" }
       ]
     },
     {
       featureType: "administrative.country",
       stylers: [
         { visibility: "on" }
       ]
     },
     {
       featureType: "administrative.province",
       stylers: [
         { visibility: "on" }
       ]
     }
    ]
  
    map.setOptions({styles: styles});
  
    layer = new google.maps.FusionTablesLayer({
              map: map,
              suppressInfoWindows: true,
              heatmap: { enabled: false },
              query: {
                select: "col2",
                from: "12IHLILwwJl1JWZRbUBF4HKCXXgF2SMRY4Q8Hroo_",
              },
              options: {
                styleId: 2,
                templateId: 2
              }
            });
    infowindow = new google.maps.InfoWindow({ content: "Loading...", maxWidth: 280 });
  
    oms.addListener('click', function(marker) {
      infowindow.setContent(marker.desc);
      infowindow.open(map, marker);
    })
  
    oms.addListener('spiderfy', function(markers) {
      infowindow.close();
    });
  

    $.ajax({
        // url: 'test.json',
        url: 'https://api.myjson.com/bins/1alni3',
        dataType: 'json',
        type: 'get',
        cache: 'false',
        success: function (data) {
            $(data.grantees).each(function (index, value) {

                // console.log(value.lat);
                var location = {
                    lat: value.lat,
                    lng: value.lng
                };

                var infoContent = "<div class='maps-info-container'>" +
                "<h3><span id='grantee-name'>" + value.Grantee + "</span></h3>" +
                "<hr>" +
                "<div class='addressContainer'>" + "<span>Address: </span>" +  value.Grantee_Location + "</div>" +
                "<div class='areaContainer'>" + "<span>Area Served: </span>" +  value.Area_Served + "</div>" + 
                "<div class='donationContainer'>" + "<span>Amount: </span>"+ value.Grant_Amount + " in " + value.Year + "</div>" +               
                "<hr>" +
                "<div class='descriptionContainer'><p>" + value.Description + "</p></div>" +
                "</div>"
                
                ;

                var infoWindow = new google.maps.InfoWindow({
                    content: infoContent
                });


                var marker = new google.maps.Marker({
                    position: location,
                    map: map
                });
                // marker.addListener('click', function() {
                //     infoWindow.open(map, marker);
                // });

                marker.desc = infoContent;
                oms.addMarker(marker);

            });
        }
    })
}

