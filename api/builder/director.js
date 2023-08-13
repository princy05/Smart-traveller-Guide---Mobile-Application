
//Builder Pattern Used for setting parameters for API request to four square API.


class Foursquare_Director {
    constructor() {
        this.construct();
    }

    construct() {
        this.client_id = undefined;
        this.client_secret = undefined;
        this.section = undefined;
        this.near = undefined;
        this.v = undefined;
        this.localTime = undefined;
        this.radius = undefined;
        this.limit = undefined;
    }
}


var obj = new Foursquare_Director()


module.exports = obj;



