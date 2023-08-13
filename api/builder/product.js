const concrete = require("./concrete");
const search_places = require("./director");

class product {
    constructor() {
        this.productformed();

        
    }
    productformed()
    {
        this.requestformed = search_places;
    }
}

var ob = new product();
console.log(ob.requestformed);


module.exports = product;






