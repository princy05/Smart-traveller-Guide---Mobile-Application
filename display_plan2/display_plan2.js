
var home_page_1 = require("../Traveler_account/home-view-model");
var geolocation = require("nativescript-geolocation");
var a = home_page_1.data();


function logout(args)
{
  var button = args.object;
  var page = button.page;
  
  page.frame.navigate("./login-page/login-page");
}
exports.logout=logout;

function buttonGetLocationTap(args) {
  var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
  then(function(loc) {
      if (loc) {
          console.log("Current location is: " + loc.latitude);
      }
  }, function(e){
      console.log("Error: " + e.message);
  });
}
exports.buttonGetLocationTap = buttonGetLocationTap;

function onTap(args) {
  var button = args.object;
  var page = button.page;
  page.frame.navigate("./display_plans/display-page");
}
exports.onTap = onTap;

var mapbox = require("nativescript-mapbox");

  

 
 
function onMapReady(args) {
  
  var a = home_page_1.data();
console.log(a);
var route1_lat = [];
var route1_lon = [];
var route1_name = [];
var len = a.length;


var n = len/2;
var route2 = [];
while (n < len) {
    var ab1 = {};
    ab1['lat'] = a[n].latitude;
    ab1['lng'] = a[n].long;
    ab1['title']=a[n].name;
    route2.push(ab1);
    n++;
}
console.log(route2);

var len1=route2.length;
  var a=route2[0].lat;
  var b=route2[0].lng;
   var c=route2[len1-1].lat;
  var d=route2[len1-1].lng;
  
  args.map.setViewport(
    {
      bounds: {
        north: a,
        east: b,
        south: c,
        west: d
      },
      animated: true
    }
);


  

  var nativeMapView = args.ios ? args.ios : args.android;
  console.log("Mapbox onMapReady for " + (args.ios ? "iOS" : "Android") + ", native object received: " + nativeMapView);

  args.map.addMarkers(route2);

 
}

exports.onMapReady = onMapReady;