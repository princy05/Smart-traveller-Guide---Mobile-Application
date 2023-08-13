
const search_places = require("./director");


class builder {
    constructor() {

        this.build();
    }
    build() {


        search_places.client_id = "RQ2GBMFSESF0AXHLDRCS43QQ0O3DS4DBCKORVPXNN24N0U1Z";
        search_places.client_secret = "4XVGTZV30IFRLLCR0KE3URY1W0NUOYHBZ2NGYN2ZGVHTSVMY";

    }

}


module.exports = builder;




