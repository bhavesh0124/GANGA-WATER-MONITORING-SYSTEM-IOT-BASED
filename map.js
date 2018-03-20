 
	
	
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: new google.maps.LatLng(18.544286, 73.863032),
          mapTypeId: 'roadmap'
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'ranger_station_maps.png'
          },
          library: {
            icon: iconBase + 'ranger_station_maps.png'
          },
		  caution: {
            icon: iconBase + 'caution_maps.png'
          },
          info: {
            icon: iconBase + 'ranger_station_maps.png'
          }
        };

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
			 content: feature.content,
            map: map,

          });
		  
        }
		
		
var features = [
          {
            position: new google.maps.LatLng(18.553486, 73.861540),
            type: 'info'
          }, {
            position: new google.maps.LatLng(18.548872, 73.856445),
            type: 'info'
          }, {
            position: new google.maps.LatLng(18.542718, 73.853924),
            type: 'info'
          }, //{
            //position: new google.maps.LatLng(18.539290, 73.854675),
            //type: 'caution',
			
          //},
		  {
            position: new google.maps.LatLng(18.532491, 73.856392),
            type: 'info'
          }, {
            position: new google.maps.LatLng(18.536814, 73.864750),
            type: 'info'
          }, {
            position: new google.maps.LatLng(18.542751, 73.878379),
            type: 'library'
			
          }
        ];
       

		
		
        for (var i = 0, feat; feat = features[i]; i++) {
          addMarker(feat);
        }
		
		
		  var x=0;
   var latLng = new google.maps.LatLng(18.549859, 73.874120);
            var sample = new google.maps.Marker({
                position: latLng,
				       icon: iconBase + 'ranger_station_maps.png',
                map: map
            });
           
            setInterval(function(){
	var dataString = "";
               
	$.ajax({
      
				type: "GET",
				url: "http://10.42.0.87/index.php",
				data: dataString,
               	cache: false,
				success: function(data) {
                 x=JSON.parse(data);
                    document.getElementById("a").innerHTML = x.a;
                   
              
				},
        
				//error: function(data)
				//{
					//alert("something wrong with your pi");
				//}   
		});
        
var i=x.a;
if(i>28)
{var myicon=iconBase + 'caution_maps.png';
				sample.setIcon( myicon);
		  }
			
else if(i<28)
{ var myicon=iconBase + 'ranger_station_maps.png';
				sample.setIcon( myicon);
		 
}
		
            
}, 1000);
            
   
		 
}
	  
	 
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	 
