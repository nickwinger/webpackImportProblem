import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Commands} from "../../services/cmmands";

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public commands: Commands) {

  }



}
