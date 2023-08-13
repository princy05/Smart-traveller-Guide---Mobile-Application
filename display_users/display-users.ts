

import { test } from "../admin/admin-view-model";
import { Label } from "tns-core-modules/ui/label";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import {arr1} from '../admin/admin-view-model';
import { EventData } from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { ListView, ItemEventData } from "tns-core-modules/ui/list-view";
import { fromObject, fromObjectRecursive, Observable, PropertyChangeData } from "tns-core-modules/data/observable";

let a1=arr1;
let a=test();
console.log("a"+a);
let route1_lat=[];
let route1_lon=[];
let route1_name=[];
let route2=[];
let len=a.length;
var n = 0;
while (n < len) {
  let ab1={};
  ab1['title'] = a[n].email;
  route2.push(ab1);    
  n++;
}
console.log(route2);

export function onTap(args: EventData) {
  const button: Button = <Button>args.object;
  const page: Page = button.page;
  
  page.frame.navigate("./admin/admin-page");
}

export function onNavigatingTo(args: EventData) {
  let a=test();
console.log("a"+a);
let route2=[];
let len=a.length;
var n = 0;
while (n < len) {
  let ab1={};
  ab1['title'] = "Name: "+a[n].name+"\nEmail: "+a[n].email+ " Preferences: "+a[n].preference
  route2.push(ab1);    
  n++;
}
//console.log(route2);
    const page = <Page>args.object;
    const vm = fromObject({
        myTitles: route2
    });
    page.bindingContext = vm;
    
}

export function onListViewLoaded(args: EventData) {
    const listView = <ListView>args.object;
}

export function onItemTap(args) {
    
}