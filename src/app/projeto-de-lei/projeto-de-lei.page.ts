import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-projeto-de-lei',
  templateUrl: './projeto-de-lei.page.html',
  styleUrls: ['./projeto-de-lei.page.scss'],
})
export class ProjetoDeLeiPage implements OnInit {

  private contentProject: any
  private projects: any = []

  constructor(
    private nav: NavController,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.getProject()
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }

  // get projects from database
  getProject() {
    this.firebaseService.getContentPage('projeto-de-lei').then(res => {
      this.contentProject = res
    }).then(() => {
      for (let key in this.contentProject) {
        if(this.contentProject[key].status === "active") {
          this.projects.push(this.contentProject[key])
        }
      }
    }).then(() => {
      console.log('contentProject ', this.contentProject)
      console.log('projects', this.projects)
    })
  }

}
