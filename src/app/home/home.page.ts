import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav:NavController) {}

  // controll de inicial slide and speed transiction
  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  // for redirect page
  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }
  

}
