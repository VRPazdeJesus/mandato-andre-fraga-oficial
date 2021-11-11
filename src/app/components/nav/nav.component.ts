import { Component, Input, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  @Input() page: string;

  constructor(private nav: NavController) { }

  ngOnInit() {
    
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

}