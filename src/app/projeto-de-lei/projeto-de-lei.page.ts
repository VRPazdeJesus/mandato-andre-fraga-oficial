import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-projeto-de-lei',
  templateUrl: './projeto-de-lei.page.html',
  styleUrls: ['./projeto-de-lei.page.scss'],
})
export class ProjetoDeLeiPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}
