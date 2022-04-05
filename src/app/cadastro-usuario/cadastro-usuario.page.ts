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

  private caracterInvalid: boolean
  private numberCaracter: boolean

  constructor(private nav: NavController, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.caracterInvalid = false
    this.numberCaracter = false
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

  passwordChange(event: any) {

    if(event.split("").length < 8) {
      this.numberCaracter = true
      console.log('number caracter invalid')
    } else {
      this.numberCaracter = false
    }

    if(event.includes(".") || 
      event.includes("$") || 
      event.includes("#") || 
      event.includes("[") || 
      event.includes("]") || 
      event.includes("/") ||
      event.includes("!") ||
      event.includes("@") ||
      event.includes("%") ||
      event.includes("*") ||
      event.includes("(") ||
      event.includes(")") ||
      event.includes("-") ||
      event.includes("|")) {
        this.caracterInvalid = true
        console.log('invalid caracter')
    } else {
      this.caracterInvalid = false
    }

    if(event.split("").length === 0) {
      this.numberCaracter = false
      this.caracterInvalid = false
    }
    
  }

}
