var map;
    document.addEventListener("deviceready", function() {
      var div = document.getElementById("map_canvas");
        
    const LA_CONVENT_CTR = new plugin.google.maps.LatLng(34.039797,-118.271773);

      
    var test =  plugin.google.maps.Map.isAvailable(function(isAvailable, message) {
    if (isAvailable) {
       map = plugin.google.maps.Map.getMap(div);
        onMapReady();
    } else {
      alert("Map not available");n
    }
  });

      
      map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
    }, false);

    function onMapReady() {
        var bounds = [
            new plugin.google.maps.LatLng(34.039705, -118.275204),
            new plugin.google.maps.LatLng(34.043544, -118.265413)
        ];

        map.addGroundOverlay({
            'url': "http://www.lacclink.com/assets/img/LACC_Main_Level_V5.jpg",
            'bounds': bounds,
            'opacity': 1,
            'bearing': -62
        }, function(groundOverlay) {
            map.showDialog();
            map.animateCamera({
                'target': bounds
            });
        });
    }
