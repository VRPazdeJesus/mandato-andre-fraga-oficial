import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ideias',
  templateUrl: './ideias.page.html',
  styleUrls: ['./ideias.page.scss'],
})
export class IdeiasPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
