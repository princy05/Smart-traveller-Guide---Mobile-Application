const concrete = require("./concrete");
const search_places = require("./director");

class product
{
    constructor()
    {
    this.requestformed=search_places;
    console.log(this.requestformed);
    }
}

var ob=new product();


