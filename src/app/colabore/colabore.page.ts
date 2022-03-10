import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-colabore',
  templateUrl: './colabore.page.html',
  styleUrls: ['./colabore.page.scss'],
})
export class ColaborePage implements OnInit {

  private email: string
  private password: string

  constructor(
    private nav:NavController, 
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  login() {
    this.firebaseService.login(this.email, this.password).then(res => {
      this.proximo('colabore-dashboard')
    })
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
