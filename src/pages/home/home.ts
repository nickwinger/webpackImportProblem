import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Commands} from "../../services/cmmands";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public commands: Commands) {

  }

  login() {
    this.commands.login();
  }

  register() {
    this.commands.register();
  }
}
