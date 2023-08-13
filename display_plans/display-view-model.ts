
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { EventData } from "tns-core-modules/data/observable";
import { Observable } from "tns-core-modules/data/observable";
import { routeone } from './routeone'
import { routetwo } from './routetwo'


export class display_plans extends Observable {

  private a1 = routeone();
  private a2 = routetwo();

  private _counter: number;
  private _message: string;
  private route1: any;

  constructor() {
    super();

  }
  countrie: { name: string }[] = this.a2;
  countries: { name: string }[] = this.a1;

  onItemTap(args): void {
    console.log('Item with index: ' + args.index + ' tapped');
  }

  routetwo(args: EventData) {

    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("./display_plan2/display_plan2");

  }

  routeone(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("./display_plan1/display_plan1");
  }

  onTap(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;

    page.frame.navigate("./Traveler_account/home-page");
  }

}













