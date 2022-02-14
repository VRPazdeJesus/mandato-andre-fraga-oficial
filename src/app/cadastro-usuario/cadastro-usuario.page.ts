import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  private name: string
  private birthDate: string
  private telephone: string
  private address: string
  private district: string
  private email: string
  private socialNetwork: string
  private andreVoter: string
  private participantAmbassadorNetwork: string
  private password: string
  private confirmPassword: string

  constructor(private nav: NavController, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

  registerUser() {
    let data = {
      name: this.name,
      birthDate: this.birthDate,
      telephone: this.telephone,
      address: this.address,
      district: this.district,
      email: this.email,
      socialNetwork: this.socialNetwork,
      andreVoter: this.andreVoter,
      participantAmbassadorNetwork: this.participantAmbassadorNetwork,
      password: this.password
    }

    this.saveRegister(data)
  }

  saveRegister(data: any) {
    this.firebaseService.register(data).then(res => {
      this.proximo('colabore-dashboard')
    })
  }

}
