import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.page.html',
  styleUrls: ['./recupera-senha.page.scss'],
})
export class RecuperaSenhaPage implements OnInit {

  private email: string
  private response: string

  constructor(private nav: NavController, private firebaseService: FirebaseService) {
    this.response = ''
    this.email = ''
  }

  ngOnInit() {
  }

  recoveryPassword() {
    this.firebaseService.recoveryPassword(this.email).then(res => {
      this.response = 'E-mail enviado com sucesso'
      this.email = ''
    });
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }


}
