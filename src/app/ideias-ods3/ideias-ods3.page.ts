import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-ideias-ods3',
  templateUrl: './ideias-ods3.page.html',
  styleUrls: ['./ideias-ods3.page.scss'],
})
export class IdeiasOds3Page implements OnInit {

  private contentOds: any
  private ideias: any = []

  constructor(
    private nav: NavController,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.getOds()
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

  // get ods3 from database
  getOds() {
    this.firebaseService.getContentPage('ideias-para-salvador/ods3').then(res => {
      this.contentOds = res
    }).then(() => {
      for (let key in this.contentOds) {
        if(this.contentOds[key].status === "active") {
          this.ideias.push(this.contentOds[key])
        }
      }
    }).then(() => {
      console.log('contentProject ', this.contentOds)
      console.log('projects', this.ideias)
    })
  }

}
