
import { Label } from "tns-core-modules/ui/label";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { EventData } from "tns-core-modules/data/observable";
import { Observable } from "tns-core-modules/data/observable";

export function onNavBtnTap(args: EventData)
{

    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("main-page");
}


export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    vm.set("email", "");
    vm.set("password", "");
    vm.set("username", "");
    vm.set("prefer", "");
    page.bindingContext = vm;
}

export function register(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    let num=1;
    const email = vm.get("email");
        const password=vm.get("password");

        const password2=vm.get("password2");
        const name=vm.get("username");
       // console.log(email);
    
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     
        if (!email ) 
        { num=0;
            if(!name)
            {
                if(!password)
                {
                    dialogs.alert("Email, Name,Password and Confirm Password required");
                }
                else
                {
                dialogs.login("Email and Name required");
                }
            }
            else 
            {
                dialogs.login("Email required");
            }
            
        }
        else if(!name)
            {num=0;
                if(!password)
                {
                    dialogs.alert("Name,Password and Confirm Password required");
                }
                else
                {
                dialogs.login("Name required");
                }
            }
           else if(!password && !password2)
                {
                    num=0;
                    dialogs.alert("Password and Confirm Password required");
                }
               
    
        
    
        
        
          else if (email && !regexp.test(email)) {
                num=0;
                dialogs.alert("Invalid email format(e.g abc@gmail.com is valid)");
            
            }
    
           else if(password.length<6)
            {
                num=0;
                dialogs.alert("Password should be more than 6 characters");
            }
            else if(password!=password2)
            {
                num=0;
                dialogs.alert("Password and confirm password does not match");

            }
 
  if(num==1)
  {
    
    // >> fetch-post-ts
    fetch("http://ec2-18-218-173-14.us-east-2.compute.amazonaws.com:3000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: vm.get("email"),
            password: vm.get("password"),
            name:vm.get("username"),
            preference:vm.get("prefer")

        })
    }).then((r) => r.json())
        .then((response) => {
            const result = response;
            // >> (hide)
            if (result.message == "User created") {

                dialogs.alert("User created").then(function() {
                    console.log("Dialog closed!");
                });
               // console.log("Even");
                page.frame.navigate("./login-page/login-page");
                
            } 
            
            else {
                dialogs.alert("Email already registered").then(()=> {
                    console.log("Dialog closed!");
                       
                });
            }
            

            // << (hide)
        }).catch((e) => {
            // >> (hide)
            console.log("Error: ");
            console.log(e);
            // << (hide)
        });
    // << fetch-post-ts
  }
}
