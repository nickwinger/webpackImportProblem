import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Commands} from "../../services/cmmands";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public commands: Commands) {

  }

  register() {
    this.commands.register();
  }

}
