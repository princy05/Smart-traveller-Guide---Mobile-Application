


//REUSED SOME CODE: https://github.com/elharony/Udacity-P8-Neighborhood-Map-Project-Explained

import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";
import { EventData } from "tns-core-modules/data/observable";

import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { json } from "./store"

import * as dialogs from "tns-core-modules/ui/dialogs";
import { displayedEvent } from "tns-core-modules/application/application";
import { observe } from "tns-core-modules/ui/gestures/gestures";






export class home_page extends Observable {


    private a: any;



    constructor() {
        super();

        // Initialize default values.


    }

    get dataItems(): ObservableArray<TokenModel> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<TokenModel>) {
        this.set("_dataItems", value);
    }



    setresult(result: any) {
        this.a = result;


    }


    getresult() {

       var a1=this.a;
       console.log("a1 is ="+a1);
        return "how are you";
    }



    navigateToFeatured(args: EventData) {
        const button: Button = <Button>args.object;
        const page: Page = button.page;
        page.frame.navigate("display-page");
    }


    onTap(args: EventData) {
        const button: Button = <Button>args.object;
        const page: Page = button.page;

        page.frame.navigate("./login-page/login-page");
    }

    test() {

        //  return ab;
    }

    Post(args) {
        const page = args.object.page;
        const vm = page.bindingContext;
        const likes = vm.get("prefer");
        const near = vm.get("location");
        const time = vm.get("duration");
        const start1 = vm.get("start");
        console.log(start1);
        const strongRegex = new RegExp("^[0-9]*$");
        const regexp = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");
        var a = 1;
        console.log(regexp.test(start1));

        if (!near) {
            a = 0;
            dialogs.alert("Location is mandatory");
        }
        else if (!start1) {
            a = 0;
            dialogs.alert("Start time is mandatory");
        }
        else if (!time) {
            a = 0;
            dialogs.alert("Duration field is mandatory");

        }
        else if (!regexp.test(start1)) {
            a = 0;
            dialogs.alert("Invalid start time(use 24-hour format in hh:mm)");

        }
        else if (!strongRegex.test(time)) {
            a = 0;
            dialogs.alert("Enter a valid time duartion");

        }
        else if (time > 24) {
            a = 0;
            dialogs.alert("Time duration maximum of 24 hours allowed");

        }
        else if(time==0)
        {
            a = 0;
            dialogs.alert("Cmon have some hours to explore");
        }
        if (a == 1) {

            fetch("http://ec2-18-218-173-14.us-east-2.compute.amazonaws.com:3000/four", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    interest: vm.get("prefer"),
                    neareast: vm.get("location"),
                    starttime: vm.get("start"),
                    duration: vm.get("duration")

                })
            }).then((r) => r.json())
                .then((response) => {
                    let result = response;
                    console.log(result);
                    if(result.message=="failed")
                    {

                    dialogs.alert("Enter valid place name");
                    }
                    else{
                    let first = result[0];
                    this.setresult(result);
                    //game = result;
                    json.store_json=result;
                    update(result);
                    
                    //ob.ab=result;
                    
                   
                    
                    //For error debuging
                    //console.log("result is "+game);
                    //console.log("a is "+this.a);
                    
                    console.log("Thanks");
                    page.frame.navigate("./display_plans/display-page");
                    console.log("Thanks");
                    }
                }).catch((e) => {

                    dialogs.alert("Enter valid place name");
                    console.log("Error: ");
                    console.log(e);

                });

        }
    }


}

export function data() {
   

    return json.store_json;

}

function update(r)
{
    //game=r;
    json.store_json=r;
}





