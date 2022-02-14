import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nosso-mandato',
  templateUrl: './nosso-mandato.page.html',
  styleUrls: ['./nosso-mandato.page.scss'],
})
export class NossoMandatoPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
