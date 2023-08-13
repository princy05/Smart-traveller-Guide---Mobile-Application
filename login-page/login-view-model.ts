import { Observable } from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";

import {Page} from "tns-core-modules/ui/page";

export class Login_Page extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }

    onTap(args) {
        
        const page = args.object.page;
        const vm = page.bindingContext;
        page.frame.navigate("./Traveler_account/home-page");
    }

    makePostRequest(args) {
        const page = args.object.page;
        const vm = page.bindingContext;
        var num:number = 1; 
        const a=0;
        const email = vm.get("user");
        const password=vm.get("pass");
       // console.log(email);
    
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     
       if (!email && !password) {
            num=0;
            dialogs.alert("Both fields mandatory");
       
        }
        else if (!email) {
            dialogs.alert("Email cannot be empty");
            num=0;
            }
       
            else if (email && !regexp.test(email)) {
                num=0;
                dialogs.alert("Invalid email address.");
            
            }

        else if (!password) {
            num=0;
            dialogs.alert("Password cannot be empty");
            
            }
           
          
    
           else  if(password.length<6)
            {
                num=0;
                dialogs.alert("Password should be more than 6 characters ");
            }
              
        if(num==1)
        {
        // >> fetch-post-ts
        fetch("http://ec2-18-218-173-14.us-east-2.compute.amazonaws.com:3000/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: vm.get("user"),
                password: vm.get("pass")
            })
        }).then((r) => r.json())
            .then((response) => {
                const result = response;
                // >> (hide)
                if (result.message == "Auth successful") {
                    console.log("Even");
                    page.frame.navigate("./Traveler_account/home-page");
                    
                } else {
                  
                    console.log("Email not exists. Please Sign Up !!");
                  
                    dialogs.alert("Email not exists. Please Sign Up !!").then(()=> {
                        
                       
                        
                    });
                }
                console.log(result);
    
            }).catch((e) => {
               console.log("Error: ");
                console.log(e);
              
            });
    
    
        }
    }

    admin(args) {
        const page = args.object.page;
        const vm = page.bindingContext;
        var num:number = 1; 
        const a=0;
        const email = vm.get("user");
        const password=vm.get("pass");
       // console.log(email);
    
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     
    
        if (!email) {
            dialogs.alert("Admin Email cannot be empty");
            num=0;
            }
       
       
        else if (!password) {
            num=0;
            dialogs.alert("Admin Password cannot be empty");
            
            }
           else  if (!email && !password) {
                num=0;
                dialogs.alert("Admin Email and password cannot be empty");
           
            }
         
              
           else if(email=="admin1@admin.com")
            {
                if(password=="admin")
            
            {
       
                    page.frame.navigate("./admin/admin-page");
            }
            else{
                dialogs.alert("Admin Password incorrect");
            }
        } 
        else
        {
            dialogs.alert("Admin Email is not correct");
        }     
               
    
    
        }
        signup(args)
{
  
    const page = args.object.page;
    const vm = page.bindingContext;
    page.frame.navigate("./signup/signup");
    
}
    }
    
   
