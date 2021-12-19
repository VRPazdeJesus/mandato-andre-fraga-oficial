import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-colabore-dashboard',
  templateUrl: './colabore-dashboard.page.html',
  styleUrls: ['./colabore-dashboard.page.scss'],
})
export class ColaboreDashboardPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
