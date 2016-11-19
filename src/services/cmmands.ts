import {Injectable} from "@angular/core";
import {ModalController} from "ionic-angular";
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";

@Injectable()
export class Commands {

  constructor(public modalCtrl: ModalController) {

  }

  register() {
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }

  login() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
