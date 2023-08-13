
//SOFTWARE REUSE: https://github.com/elharony/Udacity-P8-Neighborhood-Map-Project-Explained


const axios = require('axios');
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const data = require("../builder/product");
const data2 = require("../builder/concrete");


const endPoint = "https://api.foursquare.com/v2/venues/explore?";


router.post("/", (req, res, next) => {
  const store = {
    interest: req.body.interest,
    neareast: req.body.neareast,
    starttime: req.body.starttime,
    duration: req.body.duration
  }

  const obj = new data2();

  obj.buildpart(store.neareast, "20182507", store.starttime, store.interest);

  var setradius = 0
  var setlimit = 0
  if (store.duration > 0 && store.duration < 2) {
    setradius = 20000;
    setlimit = 60
  }
  else if (store.duration > 2 && store.duration < 5) {
    setradius = 40000;
    setlimit = 90
  }
  else if (store.duration > 5 && store.duration < 7) {
    setradius = 80000;
    setlimit = 120
  }
  else if (store.duration > 7 && store.duration < 10) {
    setradius = 100000;
    setlimit = 250
  }
  else {
    setradius = 100000;
    setlimit = 250
  }


  obj.buildpart2(setradius, setlimit);
  var ob = new data();
  console.log(ob.requestformed);

  const parameters = ob.requestformed;

  axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      var contents = response.data.response.groups[0].items;
      var route1 = []
      for (var i = 0; i < contents.length; i++) {

        var singleObj = {};
        singleObj['name'] = contents[i].venue.name;
        singleObj['latitude'] = contents[i].venue.location.lat;
        singleObj['long'] = contents[i].venue.location.lng;
        route1.push(singleObj);
      }

      res.status(200).json(
        route1
      );
    })

    .catch(error => {
      res.status(400).json(
        {
          "message": "failed"
        }
      );
      console.log("ERROR!! " + error)
    })


});



module.exports = router;