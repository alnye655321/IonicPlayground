import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,) {

    let toast = this.toastCtrl.create({
      message: 'Your account was successfully credited',
      duration: 4000
    });
    toast.present();

  }

}
