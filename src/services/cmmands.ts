import {Injectable} from "@angular/core";
import {ModalController, Events} from "ionic-angular";

// to make the app work commend these two lines
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";

@Injectable()
export class Commands {

  constructor(public modalCtrl: ModalController, public events: Events) {

  }

  // to make the app work uncommend this block
/*
  register() {
    // lazy require via string
    this.events.publish("requirePage", 'RegisterPage', (RegisterPage: any) => {
      let modal = this.modalCtrl.create(RegisterPage);
      modal.present();
    });
  }

  login() {
    // lazy require via string
    this.events.publish("requirePage", 'LoginPage', (LoginPage: any) => {
      let modal = this.modalCtrl.create(LoginPage);
      modal.present();
    });
  }
*/

  // to make the app work commend this function

  register() {
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }

 // to make the app work commend this function
  login() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
