
var mapbox = require("nativescript-mapbox");
var home_page_1 = require("../Traveler_account/home-view-model");
var routeone_1 = require("../display_plans/routeone");

function onTap(args) {
  var button = args.object;
  var page = button.page;
  page.frame.navigate("./display_plans/display-page");
}
exports.onTap = onTap;

function logout(args) {
  var button = args.object;
  var page = button.page;
  page.frame.navigate("./login-page/login-page");
}
exports.logout = logout;


function onMapReady(args) {
  var a = home_page_1.data();
  console.log(a);
  var route1_lat = [];
  var route1_lon = [];
  var route1_name = [];
  var len = a.length;
  var n = 0;
  while (n < len / 2) {
    route1_lat[n] = a[n].latitude;
    route1_lon[n] = a[n].long;
    route1_name[n] = a[n].name;
    n++;
  }
  var route1 = [];
  var route2_detail = [];
  n = 0;
  while (n < len / 2) {
    var ab = {};
    ab['name'] = a[n].name;
    route1.push(ab);
    n++;
  }
  while (n < len) {
    var ab = {};
    ab['name'] = a[n].name;
    route2_detail.push(ab);
    n++;
  }
  n = 0;
  var route2 = [];
  while (n < len / 2) {
    var ab1 = {};
    ab1['lat'] = a[n].latitude;
    ab1['lng'] = a[n].long;
    ab1['title'] = a[n].name;
    route2.push(ab1);
    n++;
  }
  console.log(route2);


  var len1 = route2.length;

  var a = route2[0].lat;
  var b = route2[0].lng;
  var c = route2[len1 - 1].lat;
  var d = route2[len1 - 1].lng;


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

  // .. or use the convenience methods exposed on args.map, for instance:
  args.map.addMarkers(route2);

}

exports.onMapReady = onMapReady;