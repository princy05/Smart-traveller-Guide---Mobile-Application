const search_places = require("./director");

const builder = require("./Four_square_Builder");

class concrete extends builder {

    constructor() {
        super();
    }
    buildpart(near, v, localtime, section) {
        search_places.near = near;
        search_places.v = v;
        search_places.section = section;
        search_places.localTime = localtime;
    }

    buildpart2(radius, limit) {
        search_places.radius = radius;
        search_places.limit = limit;
    }
    finalproduct() {
        return search_places;
    }
}

var obj = new concrete();

module.exports = concrete;