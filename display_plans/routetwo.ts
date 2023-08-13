

import { Label } from "tns-core-modules/ui/label";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { home_page,data } from '../Traveler_account/home-view-model';
import { EventData } from "tns-core-modules/data/observable";
import { Observable } from "tns-core-modules/data/observable";
import {routeone} from './routeone'




export function routetwo()
{


let a=data();
let route1_lat=[];
let route1_lon=[];
let route1_name=[];
let len=a.length;
var n = 0;
while (n < len/2) {
   route1_lat[n]=a[n].latitude;
   route1_lon[n]=a[n].long;
   route1_name[n]=a[n].name;
   n++;
}
let route1=[];
let route2_detail=[];
n=0;
while (n < len/2) {
  let ab={};
  ab['name'] = a[n].name;
  route1.push(ab);
  n++;
}
while(n<len)
{
  let ab={};
  ab['name'] = a[n].name;
  route2_detail.push(ab);
  n++;
}
n=0;
let route2=[]
while (n < len/2) {
  let ab1={};
  ab1['lat'] = a[n].latitude;
  ab1['lng'] = a[n].long;
  route2.push(ab1);
  n++;
}

return route2_detail;
}