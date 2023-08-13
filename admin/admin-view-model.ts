

import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";

import { EventData } from "tns-core-modules/data/observable";
import { json } from "./store"
import { Observable } from "tns-core-modules/data/observable";


export class Admin_Page extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        
    }
    checkusers(args) {
        const page = args.object.page;
        const vm = page.bindingContext;
      
        // >> fetch-post-ts
        fetch("http://ec2-18-218-173-14.us-east-2.compute.amazonaws.com:3000/user")
          .then((response) => response.json())
          .then((r) => {
            
            page.frame.navigate("./delete-users/delete-users");
          }).catch((err) => {
          });
      
      
      }
      Post(args) {
        const page = args.object.page;
        const vm = page.bindingContext;
      
        
      fetch("http://ec2-18-218-173-14.us-east-2.compute.amazonaws.com:3000/user")
          .then((response) => response.json())
          .then((r) => {
            // console.log(r.users);
            
            json.store_json=r.users;
            update(json.store_json);
            
            page.frame.navigate("./display_users/display-users");
          }).catch((err) => {
          });
      
      
      }
      logout(args) {
        const page = args.object.page;
        const vm = page.bindingContext;
      
        page.frame.navigate("./login-page/login-page");
      
      
      }
      
}

export function test() {

  //return result;
  return json.store_json;
}



function update(r) {
  
  json.store_json=r;
}
export let arr1 = json.store_json;
