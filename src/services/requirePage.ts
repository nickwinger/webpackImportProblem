import {Injectable} from "@angular/core";
import {Events} from "ionic-angular";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";

@Injectable()
export class RequirePage {
  static get REQUIRE_PAGE(): string { return "requirePage";}

  constructor(protected events: Events) {
    events.subscribe(RequirePage.REQUIRE_PAGE, (args: any[]) => {
      let pageName = args[0];
      let callback = args[1];

      switch (pageName) {
        case 'LoginPage':
          callback(LoginPage);
          break;
        case 'RegisterPage':
          callback(RegisterPage);
          break;
      }
    });
  }
}
